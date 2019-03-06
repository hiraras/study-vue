import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/index.vue';
import Test from './Test/index.vue';
import App from '../App.vue';

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'app',
            component: App,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        }
    ]
})
