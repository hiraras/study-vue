<template>
    <div>
        <p>{{ num }}</p>
        <p>{{ $store.getters.filteredArr(2) }}</p>
        <p>{{ getHighArr(2) }}</p>
        <p>getPlusNum: {{ getPlusNum }}, countKeys: {{ countKeys }}</p>
        <button @click="print">print</button>
        <button @click="increment">plus</button>
        <button @click="minus">minus</button>
        <router-link to="/test/1">to Test</router-link>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    mounted() {
    },
    data: function() {
        return {
            dataList: ['today', 'nextWeek', 'nextYear']
        }
    },
    components: {
    },
    computed: {
        ...mapState(['num', 'type']),
        ...mapState({ obj: function(state) { return state.obj } }), // 参数为对象类型
        ...mapGetters({ getHighArr: 'filteredArr' }), // 重命名getters
        ...mapGetters(['getPlusNum', 'countKeys'])
    },
    methods: {
        print() {
            console.log('print:', this);
            console.log(this.$store.state);
        },
        increment() {
            this.$store.commit('increaseNum', 2);
            // 以下为dispatch的两种方式
            // 这种会去寻找和type对应的action，payload为整个对象
            // this.$store.dispatch({
            //     type: 'increaseNum',
            //     num: 3
            // });
            // 调用对应的action，payload为第二个参数
            // this.$store.dispatch('increaseNum', 2);
            // this.increaseNum(1);
            // this.plus(3);
        },
        minus() {
            // const res = this.$store.dispatch('minusNum', 2);
            // const res = this.minusNum(1);
            const res = this.minusNumAlias(1);
            res.then(data => console.log('res', data))
        },
        ...mapMutations(['increaseNum']),
        ...mapMutations({
            plus: 'increaseNum'
        }),
        ...mapActions(['minusNum']),
        ...mapActions({
            minusNumAlias: 'minusNum'
        }),
    },
}
</script>

<style scoped>

</style>