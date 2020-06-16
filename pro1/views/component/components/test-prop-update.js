Vue.component('test-prop-update', {
    // 会被包含在实例中（生命周期函数的this）
    props: {
        value: Number
    },
    data: function() {
        return {
            innerValue: this.value
        };
    },
    template: `
    <div>
        <p>{{ value }}</p>
        <p>{{ innerValue }}</p>
        <button @click="$emit('change', Math.random())">change Num</button>
    </div>
    `,
});