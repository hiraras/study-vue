Vue.component('log-title', {
    props: {
        title: String
    },
    template: `
    <p>{{ title }}</p>
    `,
    inject: ['fatherName'],
    mounted: function() {
        console.log('fatherName', this.fatherName);
    },
})