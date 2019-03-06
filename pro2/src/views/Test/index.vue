<template>
    <div>
        <p>this is test</p>
        <p>{{ state.num }}</p>
        <div>
            <button @click="plus">plus</button>
            <button @click="minus">minus</button>
            <button @click="changeObj">change object {{ state.obj }}</button>
            <button @click="getNum">get num</button>
            <button @click="changeObj2">change object2 {{ state.obj }}</button>
        </div>
        <router-link to="home">to Home</router-link>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            state: this.$store.state,
        }
    },
    mounted: function() {
        console.log(this.$store);
        console.log(this.$store.getters.getNum);
        console.log(this.state);
    },
    methods: {
        plus: function() {
            this.$store.commit('increaseNum', 1);
        },
        minus: function() {
            this.$store.commit('minusNum', 1);
        },
        changeObj: function() {
            this.$store.commit('changeObj', 2);
        },
        getNum: function() {
            const num = this.$store.dispatch('getNum');
            console.log(num);
        },
        changeObj2: function() {
            this.$store.dispatch('changeObj', 3);
        },
    },
    watch: {
        '$route': function(newValue, oldValue){
            console.log(newValue, oldValue);
        }
    }
}
</script>
