import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/index.vue';
import Test from './Test/index.vue';
import App from './App/index.vue';
import NotFound from './NotFound/index.vue';
import HomeChild from './Home/Children/index.vue';
import TestChild from './Test/Children/index.vue';
import TestChild2 from './Test/Children/TestChild.vue';

Vue.use(VueRouter);
export default new VueRouter({
    scrollBehavior: function(to, from, savedPosition) {
        console.log(savedPosition);
        return {x: 0, y: 0};
    },
    routes: [
        {
            path: '*',
            name: '404',
            component: NotFound,
        },
        {
            path: '/',
            name: 'App',
            component: App,
            alias: '/app',
            meta: {
                authority: 666,
            }
        },
        {
            path: '/home/:id',
            name: 'Home',
            component: Home,
            props: true,
            children: [
                {
                    path: 's',
                    component: HomeChild,
                },
                {
                    path: 'children',
                    component: HomeChild,
                    props: {
                        a: 1,
                        b: 2,
                    }
                },
            ]
        },
        {
            path: '/test/:path',
            name: 'Test',
            alias: '/test-alias/:path',
            component: Test,
            children: [
                {
                    path: 'children/:data',
                    components: {
                        child: TestChild,
                        default: TestChild2
                    },
                    props: {
                        child: true,
                    }
                }
            ]
        },
        // {
        //     path: '*',
        //     redirect: '/',
        // },
    ],
})
