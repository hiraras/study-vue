
Vue.component('listener', {
    props: {
    },
    data: function() {
        return {

        };
    },
    methods: {
    },
    computed: {
        handler: function(e) {
            console.log(e);
            return Object.assign({}, this.$listener, {
                focus: function(e) {
                    console.log('focus');
                },
                input: function(e) {
                    console.log(e.target.value);
                },
            });
        },
    },
    template: `
    <label>
        监听组件
        <input v-on="handler" />
    </label>
    `
});
