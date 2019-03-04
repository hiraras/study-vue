
Vue.component('text-document', {
    props: {
        title: String,
    },
    data: function() {
        return {

        };
    },
    methods: {
        inputHandler: function(e) {
            this.$emit('update:title', e.target.value);
        },
    },
    template: `
    <div>
        <p>{{ title }}</p>
        <input :value="title" @input="inputHandler" />
    </div>
    `
});