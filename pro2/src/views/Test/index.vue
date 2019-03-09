<template>
    <div>
        <p>this is test</p>
        <p>{{ state.num }}</p>
        <p>{{ this.$store.getters['storeB/getName'] }}</p>
        <p>{{ moduleAName }}</p>
        <p>{{ getName }}</p>
        <p>{{ routeName }}</p>
        <div>
            <button @click="plus">plus</button>
            <button @click="minus">minus</button>
            <button @click="changeObj">change object {{ state.storeA.obj }}</button>
            <button @click="changeName">change name {{ state.storeB.name }}</button>
            <button @click="changeName2(getRandom())">change name2 {{ state.storeB.name }}</button>
            <button @click="changeObj2">change object2 {{ state.storeB.obj }}</button>
        </div>
        <router-link to="/home/123">to Home</router-link>
        <button @click="toHome">to Home</button>
        <router-link :to="'/test/' + routeName + '1'">change dynamic url</router-link>
        <br />
        <router-link :to="'/404'">to 404</router-link>
        <router-view name="child"></router-view>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    data: function() {
        return {
            state: this.$store.state,
            routeName: this.$route.params.path,
        }
    },
    mounted: function() {
        console.log(this.$store);
        console.log(this.$store.getters);
        console.log(this.state);
        console.log(this.$router);
        console.log(this.$route);
    },
    methods: {
        ...mapActions('storeB', {
            changeName2: 'changeName'
        }),
        getRandom: function() {
            return Math.floor(Math.random() * 10).toFixed(2);
        },
        plus: function() {
            this.$store.commit('increaseNum', 1);
        },
        minus: function() {
            this.$store.commit('minusNum', 1);
        },
        changeObj: function() {
            this.$store.commit('storeA/changeObj', 2);
        },
        changeName: function() {
            const name = this.$store.dispatch('storeB/changeName', this.getRandom());
        },
        changeObj2: function() {
            this.$store.dispatch('storeA/changeObj', 3);
        },
        toHome: function() {
            this.$router.push('/home/tom?a=1');
            // this.$router.push('/test/' + this.$route.params.name + 1);
        },
    },
    watch: {
        $route: function(newValue, oldValue){
            console.log(newValue, oldValue);
            this.routeName = newValue.params.path;
        }
    },
    computed: {
        ...mapState({
            moduleAName: state => state.storeA.name,
        }),
        ...mapGetters('storeB', {
            getName: 'getName',
        }),
    },
    beforeRouteUpdate: function(to, from, next) {
        console.log(to, from);
        console.log(from === this.$route); // true
        // 执行了next()才会watch到路由的变化
        next();
        // 可接受一个对象，结构像$router.push(params)中的params
        // next({
        //     path: '/'
        // });
    }
}
</script>
