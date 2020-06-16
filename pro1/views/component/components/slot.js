// 最简单的插槽
Vue.component('slot1', {
    template: `
    <fieldset>
        <legend>slot1</legend>
        <slot></slot>
    </fieldset>
    `,
});

// 具名插槽
Vue.component('slot2', {
    template: `
    <fieldset>
        <legend>slot2</legend>
        <slot name="slot1"></slot>
        <slot></slot>
        <slot name="slot2"></slot>
    </fieldset>
    `,
});

// 作用域插槽
Vue.component('slot3', {
    template: `
    <fieldset>
        <legend>slot3</legend>
        <slot name="slot1" content="啊啊啊"></slot>
        <slot content="是是是"></slot>
        <slot name="slot2" content="给个光a"></slot>
        <slot name="slot3">测试一下v-slot:xxx这种形式重复使用后的显示问题</slot>
        <slot name="slot4">测试一下v-slot:xxx这种形式重复使用后的显示问题</slot>
    </fieldset>
    `
})

Vue.component('slot4', {
    props: {
        'list': {
            type: Array,
        }
    },
    template: `
    <fieldset>
        <legend>slot4</legend>
        <ul>
            <slot name="slot" v-for="item in list" :data="item"></slot>
        </ul>
    </fieldset>
    `,
})

Vue.component('slot5', {
    template: `
    <fieldset>
        <legend>slot5</legend>
        <slot></slot>
        <slot name="slot"></slot>
    </fieldset>
    `,
})

Vue.component('slot6', {
    template: `
    <fieldset>
        <legend>slot6</legend>
        <my-input></my-input>
    </fieldset>
    `,
})

Vue.component('slot7', {
    template: `
    <fieldset>
        <legend>slot7</legend>
        <slot>
            <p>测试插槽默认内容</p>
        </slot>
    </fieldset>
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
    <fieldset>
        <legend>slot8</legend>
        <p>{{ name }},{{ slotName }}</p>
        <button @click="toggle">切换位置</button>
        <div style="backgroundColor: red;color: white">
            <slot name="slot1">slot1</slot>
        </div>
        <div style="backgroundColor: green;color: white">
            <slot name="slot2">slot2</slot>
        </div>
    </fieldset>
    `,
    mounted: function() {
        // console.log(this);
    },
})

Vue.component('slot9', {
    template: `
    <fieldset>
        <legend>slot9</legend>
        <slot data="slot9">
            <p>slot9</p>
        </slot>
    </fieldset>
    `,
})

Vue.component('slot10', {
    props: {
        slotName: String,
    },
    template: `
    <fieldset>
        <legend>slot10</legend>
        <slot data="1">
            <p>slot10</p>
        </slot>
    </fieldset>
    `,
    provide: function() {
        return {
            fatherName: this.slotName
        };
    },
})