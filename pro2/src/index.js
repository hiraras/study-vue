import Vue from 'vue';
import Vuex from 'vuex';
import App from './views/App/index.vue';
import router from './views/router';
import storeA from './states/moduleA';
import storeB from './states/moduleB';

Vue.use(Vuex);

const initialState = {
    num: 1,
    type: 'string',
    obj: {
        a: 1,
    }
}
const getters = {
    getNum: function(state) {
        return state.num + 1;
    }
}
const mutations = {
    increaseNum: function(state, num) {
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
}
// const store = new Vuex.Store({
//     state: initialState,
//     getters: getters,
//     mutations: mutations,
//     actions: actions,
// });
const store = new Vuex.Store({
    modules: {
        storeA,
        storeB,
    }
});
router.beforeEach((to, from, next) => {
    console.log('to:', to);
    console.log('from:', from);
    next();
});
new Vue({
    router: router,
    store: store,
    // el: '#root',
    template: '<router-view></router-view>',
    components: {
        App,
    }
}).$mount('#root');
