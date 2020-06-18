
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
    num: 1,
    type: 'string',
    obj: {
        a: 1,
    },
    arr: [1,2,3,4,5]
}
// store 的 computed
const getters = {
    getNum: function(state) {
        return state.num;
    },
    getPlusNum: function(state) {
        return state.num + 1;
    },
    countKeys: function(state) {
        return state.arr.length;
    },
    // 可以通过返回一个函数，来达到能够传参的功能
    filteredArr: function(state) {
        return (num) => {
            return state.arr.filter(item => item > num);
        }
    }
}
const mutations = {
    increaseNum: async function(state, num = 1) {
        console.log('called', num)
        state.num += num;
    },
    minusNum: function(state, num) {
        state.num -= num;
    },
    changeObj: function(state, value) {
        state.obj.a = value;
    }
}
const actions = {
    // context为类似store的一个对象但是不相等
    getNum: function(context) {
        return context.getters.getNum;
    },
    changeObj: function(context, value) {
        context.commit('changeObj', value);
    },
    minusNum: function({ commit, dispatch }, payload) {
        console.log(payload);
        commit('minusNum', payload);
        return dispatch('getNum');
    }
}

const store = new Vuex.Store({
    state: initialState,
    getters: getters,
    mutations: mutations,
    actions: actions,
});

export default store;
