Vue.component('blog', {
    data: function() {
        return {
            message: 'this is blog self',
            dataList: [1, 2, 3],
        }
    },
    methods: {
        say() {
            console.log('this is blog self');
        },
    },
    render: function(createElement, ctx) {
        const self = this;
        return createElement('div',
            [...this.dataList.map(value => {
                return createElement('p', [value])
            }), createElement('slot', {
                slot: 'slot1'
            }, this.$slots.slot1),
                createElement('input', {
                    domProps: {
                        value: self.dataList
                    },
                    on: {
                        input: function(e) {
                            console.log(e.target.value);
                        },
                        keyup: function(event) {
                            console.log(event);
                        },
                    }
                })
            ]
        )
    },
});