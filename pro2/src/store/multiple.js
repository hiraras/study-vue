
import Vue from 'vue';
import Vuex from 'vuex';
import storeA from '../states/moduleA';
import storeB from '../states/moduleB';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        storeA,
        storeB,
    }
});

export default store;
