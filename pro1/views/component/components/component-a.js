
Vue.component('component-a', {
    props: {
        say: Function,
    },
    data: function() {
        return {

        };
    },
    methods: {
        click: function() {
            this.$emit('say', 'this is component-a');
            // $emit()方法即使方法名不存在也不会报错，它根据调用它的对象（对象必须是vue实例，组件也可以）
            // 调用后执行对应对象上的监听方法，this就用组件上的方法，这里就是父组件传递下来的方法
            // 其他对象则调用其他对象上的监听方法，这里监听事件卸载component-b上了
            // this.$emit('says', 'this is component-a');
            globalObj.$emit('say', 1);
        },
    },
    template: `
    <button @click="click">组件a的按钮</button>
    `
});