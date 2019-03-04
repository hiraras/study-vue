const styles = {
    title: {
        margin: '5px 0',
    },
    content: {
        margin: '5px 0',
    },
}

Vue.component('button-counter', {
    props: ['title', 'content'],
    data: function() {
        return {
            num: 0,
            styles: styles,
        };
    },
    methods: {
        plus: function() {
            this.num ++;
        },
    },
    template: `
    <div>
        <h4 :style="styles.title">{{ title }}</h4>
        <p :style="styles.content">{{ content }}</p>
        <button v-on:click="plus">数值:{{ num }}</button>
    </div>
    `,
});