<template>
    <div>
        <p>this is test</p>
        <p>{{ state.num }}</p>
        <p>{{ this.$store.getters['storeB/getName'] }}</p>
        <p>{{ moduleAName }}</p>
        <p>{{ getName }}</p>
        <div>
            <button @click="plus">plus</button>
            <button @click="minus">minus</button>
            <button @click="changeObj">change object {{ state.storeA.obj }}</button>
            <button @click="changeName">change name {{ state.storeB.name }}</button>
            <button @click="changeName2(getRandom())">change name2 {{ state.storeB.name }}</button>
            <button @click="changeObj2">change object2 {{ state.storeB.obj }}</button>
        </div>
        <router-link to="home">to Home</router-link>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    data: function() {
        return {
            state: this.$store.state,
        }
    },
    mounted: function() {
        console.log(this.$store);
        console.log(this.$store.getters);
        console.log(this.state);
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
    },
    watch: {
        '$route': function(newValue, oldValue){
            console.log(newValue, oldValue);
        }
    },
    computed: {
        ...mapState({
            moduleAName: state => state.storeA.name,
        }),
        ...mapGetters('storeB', {
            getName: 'getName',
        }),
    }
}
</script>
