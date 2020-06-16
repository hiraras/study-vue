

Vue.component('blog', {
    // 即便props里面不加'change'也能够用$emit()调用
    props: ['change', 'content'],
    data: function() {
        return {
            newContent: 'this is new content',
        };
    },
    // 子组件调用父组件传入的方法必须用$emit(方法名, 参数...)
    template: `
    <div>
        <p>{{ content }}</p>
        <button v-on:click="$emit('change', newContent, 1)">change</button>
    </div>
    `,
    mounted: function() {
        console.log('mounted');
    },
})