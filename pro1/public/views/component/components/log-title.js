Vue.component('log-title', {
    props: {
        title: String,
        props: null,
    },
    template: `
    <p>{{ title }}</p>
    `,
    inject: ['fatherName'],
    mounted: function() {
        console.log(this.fatherName);
        console.log(this.props);
    },
})
