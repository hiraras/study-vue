Vue.component('root2', {
    data: function() {
        return {
            list: [1, 2, 3],
            obj: {
                a: 1,
                b: 2,
            },
            date: new Date(),
            todos: [{
                isComplete: true,
            }, {
                isComplete: false,
            }],
            exampleList: [{
                id: 1,
                content: 'one'
            }, {
                id: 2,
                content: 'two'
            }, {
                id: 3,
                content: 'three'
            }],
            inputValue: '',
            selectValue: 1,
            checkboxList: [],
            radioValue: 'b',
            toggle: 'yes',
            testCheckboxValue: true,
            testInputNumber: '',
            testInputTrim: '',
        };
    },
    methods: {
        changeList: function() {
            // this.list = [4, 5, 6]; // 会引起视图改变
            this.list[2] = 6; // 不会引起视图改变
        },
        getDate: function() {
            return new Date().getTime();
        },
        addItem: function(e) {
            console.log(e.srcElement);
            var that = this;
            this.exampleList.push({
                id: that.exampleList.length + 1,
                content: that.inputValue,
            });
            this.inputValue = '';
        },
        innerClick: function(e) {
            console.log('inner');
        },
        outterClick: function() {
            console.log('outter');
        },
        grandChild: function() {
            console.log('grandChild');
        },
        grandChildSon: function() {
            console.log('grandChildSon');
        },
        testSelf: function() {
            console.log(123);
        },
        testPassive: function() {
            console.log('passive');
        },
        testKeyup: function(e) {
            console.log(e);
        },
        testCombineKey: function() {
            console.log('combine key press');
        },
        selectValueChange: function(e) {
            console.log(e);
        },
        textareaInput: function(e) {
            console.log(e.target.value);
        },
        checkboxChange: function(e) {
            console.log(e);
            this.testCheckboxValue = e.target.checked;
        },
    },
    computed: {

    },
    watch: {

    },
    template: `
    <div>
        <hr style="border-color: red" />
        <br />
        <p v-for="item in list">{{ item }}</p>
        <button @click="changeList">修改list</button>
        <p>{{ obj }}</p>
        <p>{{ obj.c }}</p>
        <p>{{ date }}</p>
        <li v-for="todo in todos" v-if="!todo.isComplete">
            {{ todo.isComplete }}
        </li>
        <div class="example1">
            <input v-model="inputValue" />
            <button @click="addItem($event)">add item</button>
            <ul>
                <li v-for="item in exampleList" v-if="item.content != 'one'" :key="item.id">
                    {{ item.content }}
                </li>
            </ul>
            <p>{{ exampleList }}</p>
        </div>
        <!-- 
            一般情况下点击p标签会先执行innerClick，再执行outterClick,capture修饰过后，
            各个层级的事件触发时机为，有capture先于没有capture，都有capture的，外部先于内部的,
            都没有capture的内部先于外部的,(有capture是在捕获的时候触发,没有的则是在冒泡的时候触发)
        -->
        <div @click.capture="outterClick" class="outter">
            <p @click.capture='innerClick'>
                <span @click="grandChild">
                    <span @click="grandChildSon">489498</span>
                </span>
            </p>
        </div>
        <!-- 当前元素自己触发的时候才执行函数，即点击456456因为是内部元素触发的
            不会执行testSelf,只有直接点击了p才触发 
        -->
        <p @click.self="testSelf">
            <span>456456</span>
        </p>
        <p @click.passive="testPassive">mmmmmmmmm</p>
        <input @keyup.enter="testKeyup($event)" placeholder="test key up" />
        <br />
        <!-- 组合键，不在乎代码顺序，在乎按下顺序,除了.ctrl还有.alt,.shift,.meta -->
        <input @keyup.enter.ctrl="testCombineKey" placeholder="test 组合键" />
        <p>{{ selectValue }}</p>
        <select v-model="selectValue" @change="selectValueChange($event)">
            <option v-for="item of exampleList" :key="item.id" :value="item.id">{{ item.content }}</option>
        </select>
        <br />
        <textarea @input="textareaInput"></textarea>
        <p>{{ checkboxList }}</p>
        <input type="checkbox" value="mack" id="mack" @change="checkboxChange" v-model="checkboxList" />
        <label for="mack">mack</label>
        <p>{{ radioValue }}</p>
        <input type="radio" value="a" v-model="radioValue" /><label>a</label>
        <input type="radio" value="b" v-model="radioValue" /><label>b</label>
        <p>{{ toggle }}</p>
        <p>{{ testCheckboxValue }}</p>
        <input
            type="checkbox"
            @change="checkboxChange"
            :checked="testCheckboxValue"
        />
        <p>{{ testInputNumber }}</p>
        <input v-model.number="testInputNumber" type="number" />
        <p>{{ testInputTrim }}</p>
        <input v-model.trim="testInputTrim" />
    </div>
    `,
});
