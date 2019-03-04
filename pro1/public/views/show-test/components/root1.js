Vue.component('root1', {
    data: function() {
        return {
            message: 'this is a message',
            message2: 'this is message2',
            show: true,
            buttonDisabled: false,
            normalStr: 'abcdefg',
            question: 'Are you ok?',
            answer: '',
            ja: 'ja',
            emptyStr: '',
            classP: {
                active: true,
            },
            testObj: {
                a: 1,
                b: 2,
            },
            classList: ['active', 'kdk'],
            baseStyle: {
                background: 'blue',
                border: '1px solid black', // 像标签的传统style格式一样
                color: ['green', 'white'], // 2.3.0+版本支持数组形式，最后一个支持的样式会被应用
            },
            otherStyle: {
                fontSize: '18px',
                color: 'pink',
            },
            styleList: [{
                color: 'red'
            }, {
                background: 'blue',
            }],
            isOne: true,
            dataList: [{
                id: 1,
                content: 'one'
            }, {
                id: 2,
                content: 'tow'
            }],
            forObj: {
                a: 'one',
                b: 'two',
            },
        };
    },
    methods: {
        toggleDisabled: function() {
            this.buttonDisabled = !this.buttonDisabled;
        },
        getMessage: function() {
            return 'this is return message';
        },
        reverseStr: function(str) {
            return str.split('').reverse().join('');
        },
        focus: function() {
            console.log(111);
        },
        getNow: function() {
            return this.now;
        },
        changeTestObj: function() {
            // 深监听，对象属性发生改变也重新渲染
            this.testObj.a = 3;
        },
        getVisible: function() {
            return false;
        },
        changeDataList: function() {
            this.dataList[1].content = 'three';
        },
    },
    // computed的属性只有他的依赖发生改变才会重新计算，因为它会缓存之前计算的值
    // 例如返回的值如果为new Date().getTime()，不管拿几次值都会返回之前的，而methods
    // 中的方法在渲染的时候都会实时更新
    computed: {
        reversedStr: function() {
            return this.normalStr.split('').reverse().join('');
        },
        now: function() {
            return new Date();
        },
    },
    watch: {
        question: function(newValue, oldValue) {
            this.answer = 'oh yes!';
            setTimeout(() => {
                this.answer = 'emmm, it is bad';
            }, 1000);
        },
        testObj: function() {
            // 浅监听，对象内部值变化不会被监听到
            console.log('testObj is value is changed');
        },
    },
    template: `
    <div>
        <!-- 设置插值一次，数据改变时不会改变显示 -->
        <p v-once>{{ message + ',this is extra message' }}</p>
        <p>{{ message2 }}</p>
        <!-- 值为true则渲染，否则不渲染，会进行类型转换在取值 -->
        <p v-if='show'>456</p>
        <button v-bind:disabled='buttonDisabled'>按钮</button>
        <button :disabled='!buttonDisabled'>应用了简写:的按钮</button>
        <button v-on:click='toggleDisabled'>改变上个按钮的disabled属性</button>
        <button @click='toggleDisabled'>测试v-on改为@</button>
        <!-- .prevent回自动执行event.preventDefault方法 -->
        <input @focus.prevent='focus' />
        <p>{{ getMessage() }}</p>
        <p>{{ normalStr }}</p>
        <p>{{ reversedStr }}</p>
        <p>{{ reverseStr('hello') }}</p>
        <p>{{ now }}</p>
        <button @click='getNow'>获取now的值</button>
        <input v-model='question' />
        <p>{{ question }}</p>
        <p>{{ answer }}</p>
        <p :title='message'>74894894</p>
        <p class="if" v-bind:class='ja'>如果。。。那么...</p>
        <p :class="classP">48949489</p>
        <p>{{ testObj }}</p>
        <button v-on:click='changeTestObj'>点击改变对象值</button>
        <p :class='[message, { sam: true }]'>{{ja}}</p>
        <p :style='{ color: "pink" }'>kkkkkk</p>
        <!-- 会从前往后一个个应用样式，后面的相同样式覆盖前面的 -->
        <p :style="[otherStyle, baseStyle]">ssssss</p>
        <p :style="styleList">gggggggggg</p>
        <!-- if、else if、else几个元素必须紧接着，不然无效 -->
        <p v-if="getVisible()">hhhhhhhhhhh</p>
        <p v-else-if="true">nnnnnnnnn</p>
        <p v-else>mmmmmm</p>
        <!-- template标签优点向react的React.Fragment标签，可一当做一个标签绑定各种事物，但不会被渲染 -->
        <template v-if="isOne">
            <!-- 
                key属性用来告诉vue该组件是完全独立的,不要复用它,如果没有key下面的
                代码切换之后input会是同一个（即使id不一样）,输入文本后切换文本不被替换
            -->
            <input id="input1" key="input1" />
        </template>
        <template v-else>
            <input id="input2" key="input2" />
        </template>
        <button @click="isOne = !isOne">切换</button>
        <!-- 只是将display变为none -->
        <p v-show="false">bbbbbbbb</p>
        <ol>
            <li>{{ dataList }}</li>
            <li 
                v-for="(item, index) of dataList"
                :class="item.content"
            >{{ index }} - {{ item.content }}</li>
        </ol>
        <button @click="changeDataList">测试for里面的绑定关系</button>
        <!-- in 和 of 都可以遍历对象 -->
        <div v-for="(item, key, index) of forObj">
            {{ item }} - {{ key }} - {{ index }}
        </div>
        <input v-for="item of dataList" v-model="item.content" />
    </div>
    `,
});
