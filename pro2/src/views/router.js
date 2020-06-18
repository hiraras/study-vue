import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/index';
import Test from './Test/index';
import App from './App/index';
import NotFound from './NotFound/index';
import HomeChild from './Home/Children/index';
import TestChild from './Test/Children/index';
import FlowProps from './FlowProps/index';
import SingleStore from './Store/SingleStore';
import MultipleStore from './Store/MultipleStore';

Vue.use(VueRouter);
export default new VueRouter({
    scrollBehavior: function(to, from, savedPosition) {
        console.log(savedPosition);
        return {x: 0, y: 0};
    },
    // 需要后端配置，vue-router只是对url进行匹配、提取等操作，但浏览器其实发出了个请求，hash模式下其实一直是'/'下的路径，所以都会返回相同的目录下的资源
    // history模式下'/about'，会返回about目录下的资源，但实际并没有，所以需要服务端配置在任意目录下都返回'/'下的资源
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            alias: '/app',
            meta: {
                authority: 666,
            },
            props: (route) => ({ meta: route.meta }),
            beforeEnter: (to, from, next) => {
                // 路由独享的守卫，和全局用法一样
                next();
            }
        },
        {
            path: '/home/:id',
            name: 'Home',
            component: Home,
            // 如果 props 被设置为 true，route.params 将会被设置为组件属性。
            props: true,
            children: [
                {
                    path: 's',
                    component: HomeChild,
                },
                {
                    path: 'children',
                    component: HomeChild,
                    // 这里不能设置为true，就从this.$route.params这里取（注意：从this.$route.params取，会让组件与路由的耦合性变强，将其转为props比较合理 ）
                    props: {
                        a: 1,
                        b: 2,
                    }
                },
                // 当url为/home/xx时，path: '' 能让子组件也匹配到
                // {
                //     path: '',
                //     component: HomeChild
                // }
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
                    },
                    props: {
                        child: true,
                    }
                }
            ]
        },
        {
            path: '/flow-props',
            name: 'FlowProps',
            component: FlowProps,
        },
        {
            path: '/single-store',
            name: 'SingleStore',
            component: SingleStore
        },
        {
            path: '/multiple-store',
            name: 'MultipleStore',
            component: MultipleStore
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
        },
        // {
        //     path: '*',
        //     redirect: '/',
        // },
    ],
})
