Vue.component('blog', {
    mixins: [myMixin, myMixin2],
    data: function() {
        return {
            // 数据对象在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先
            message: 'this is blog self',
        }
    },
    // 同名对象类型，会被混合为一个对象，对象中有重名属性的，自身优先
    methods: {
        say() {
            console.log('this is self');
        },
    },
    template: `
    <div>{{ message }}</div>
    `,
    mounted: function() {
        console.log('self mounted');
        this.say();
    },
    // 同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
    beforeMount: function() {
        console.log('self before mount');
    },
});