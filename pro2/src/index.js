import Vue from 'vue';
import App from './views/App/index.vue';
import router from './views/router';
import singleStore from './store/single';
import multipleStore from './store/multiple';

router.beforeEach((to, from, next) => {
    console.log('to:', to);
    console.log('from:', from);
    next();
});

new Vue({
    // el: '#root',
    router: router,
    store: singleStore,
    // store: multipleStore,
    template: '<router-view></router-view>',
    components: {
        App,
    }
}).$mount('#root');
