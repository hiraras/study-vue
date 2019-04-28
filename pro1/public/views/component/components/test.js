Vue.component('test', {
    // 会被包含在实例中（生命周期函数的this）
    props: {
        myMessage: String,
        obj: Object,
        firstName: String,
        data: null,
        // 基础类型检测 (`null` 指允许任何类型)
        // propA: Number,
        // // 可能是多种类型
        // propB: [String, Number],
        // // 必传且是字符串
        // propC: {
        // type: String,
        // required: true
        // },
        // // 数值且有默认值
        // propD: {
        // type: Number,
        // default: 100
        // },
        // // 数组/对象的默认值应当由一个工厂函数返回
        // propE: {
        // type: Object,
        // default: function () {
        //     return { message: 'hello' }
        // }
        // },
        // // 自定义验证函数
        // propF: {
        //     validator: function (value) {
        //         return value > 10
        //     }
        // }
    }, // 既能取到值，也能规定props属性的类型
    // props: ['myMessage', 'obj'], // 直接取值
    data: function() {
        // 根据props初始化组件的state可以在这里，也可以在computed中
        return {
        };
    },
    template: `
    <div>
        <p>{{ myMessage }}</p>
        <p v-if="firstName">firstName: {{ firstName }}</p>
    </div>
    `,
    mounted: function() {
        if(typeof this.obj === 'object' && this.obj) {
            this.obj.a = 2;
        }
        console.log(this.$root);
        console.log(this.data);
    },
});