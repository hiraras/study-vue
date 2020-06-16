Vue.component('blog', {
    data: function() {
        return {
            message: 'this is blog self',
        }
    },
    methods: {
        say() {
            console.log('this is blog self');
        },
    },
    template: `
    <input v-focus />
    `,
    // 自定义局部指令，局部和外部都有的情况优先用局部的
    // 函数参数都一样,el、binding、vnode 和 oldVnode,
    // 详见:https://cn.vuejs.org/v2/guide/custom-directive.html 钩子函数参数
    directives: {
        focus: {
            // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
            bind: function() {

            },
            // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
            inserted: function(el) {
                console.log('blog inserted');
                el.focus();
            },
            // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
            componentUpdated: function() {

            },
            // 只调用一次，指令与元素解绑时调用
            unbind: function() {

            },
        }
    }
});