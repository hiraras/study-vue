Vue.component('my-input', {
    model: {
        prop: 'value',
        event: 'input'
    },
    // 会被包含在实例中（生命周期函数的this）
    props: ['value'],
    data: function() {
        // 根据props初始化组件的state可以在这里，也可以在computed中
        return {
            a: this.value,
        };
    },
    template: `
    <div class="my-input-container">
        <p>a:{{ value }} b:{{ b }}</p>
        <input @input="$emit('input', $event.target.value)" :value="value" />
    </div>
    `,
    mounted: function() {
        console.log(this);
    },
    computed: {
        b: function() {
            return this.a + '1';
        },
    },
});