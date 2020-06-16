const myMixin = {
    data: function() {
        return {
            message: 'this is mixin',
        }
    },
    methods: {
        say() {
            console.log('this is mixin');
        },
    },
    mounted: function() {
        console.log('mixin mounted');
    },
};

const myMixin2 = {
    beforeMount: function() {
        console.log('mixin before mount');
    },
}