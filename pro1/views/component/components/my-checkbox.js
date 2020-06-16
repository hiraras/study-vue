Vue.component('my-checkbox', {
    model: {
        event: 'change',
        prop: 'checked',
        // v-model是 v-bind:value="varible"  v-on:input="func"的语法糖
        // 当子组件执行对应方法时，会监听到，并执行对应方法func，即默认监听input事件，这里将其改成了监听change事件
        // 默认给组件的value进行绑定，这里改成了checked进行了绑定
        // 上述描述为例子，实际上不同type的input有不同的默认值
    },
    props: {
        checked: Boolean
    },
    data: function() {
        return {
        };
    },
    template: `
    <div>
       <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)" />
       <span>{{ checked }}</span>
    </div>
    `,
});