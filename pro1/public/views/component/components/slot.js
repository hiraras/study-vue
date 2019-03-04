// 最简单的插槽
Vue.component('slot1', {
    template: `
    <div>
        <p>slot1</p>
        <slot></slot>
    </div>
    `,
});

// 具名插槽
Vue.component('slot2', {
    template: `
    <div>
        <p>slot2</p>
        <slot name="slot1"></slot>
        <slot></slot>
        <slot name="slot2"></slot>
    </div>
    `,
});

// 作用域插槽
Vue.component('slot3', {
    template: `
    <div>
        <p>slot3</p>
        <slot name="slot1" content="啊啊啊"></slot>
        <slot content="是是是"></slot>
        <slot name="slot2" content="给个光"></slot>
    </div>
    `
})

Vue.component('slot4', {
    props: {
        'list': {
            type: Array,
        }
    },
    template: `
    <div>
        <p>slot4</p>
        <ul>
            <slot name="slot" v-for="item in list" :data="item"></slot>
        </ul>
    </div>
    `,
})

Vue.component('slot5', {
    template: `
    <div>
        <p>slot5</p>
        <slot></slot>
        <slot name="slot"></slot>
    </div>
    `,
})

Vue.component('slot6', {
    template: `
    <div>
        <p>slot6</p>
        <my-input></my-input>
    </div>
    `,
})

Vue.component('slot7', {
    template: `
    <div>
        <p>slot7</p>
        <slot>
            <p>ddd</p>
        </slot>
    </div>
    `,
})

Vue.component('slot8', {
    props: ['slotName'],
    data: function() {
        return {
            name: 'slot1'
        }
    },
    methods: {
        toggle: function() {
            const newName = this.name === 'slot1' ? 'slot2' : 'slot1';
            this.name = newName;
            this.$emit('update:slot-name', newName);
        },
    },
    template: `
    <div>
        <p>slot8</p>
        <p>{{ name }},{{ slotName }}</p>
        <button @click="toggle">切换位置</button>
        <div style="backgroundColor: red;color: white">
            <slot name="slot1">slot1</slot>
        </div>
        <div style="backgroundColor: green;color: white">
            <slot name="slot2">slot2</slot>
        </div>
    </div>
    `,
    mounted: function() {
        console.log(this);
    },
})

Vue.component('slot9', {
    template: `
    <div>
        <p>slot9</p>
        <slot data="1">
            <p>slot9</p>
        </slot>
    </div>
    `,
})

Vue.component('slot10', {
    props: {
        slotName: String,
    },
    template: `
    <div>
        <p>slot10</p>
        <slot data="1">
            <p>slot10</p>
        </slot>
    </div>
    `,
    provide: function() {
        return {
            fatherName: this.slotName
        };
    },
})