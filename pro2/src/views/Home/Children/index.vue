<template>
    <div class="container">
        <p>this is children</p>
        <p>{{ a }} {{ b }} {{ id }}</p>
        <button @click="linkTo">linkTo</button>
    </div>
</template>

<script>
    export default {
        props: ['a', 'b', 'id'],
        methods: {
            linkTo: function() {
                const pathName = '/test/jacy';
                // 有name属性的情况会忽视path，没有name有path的情况会忽视params
                const params = {
                    path: '/test/keo',
                    name: 'Test',
                    params: {
                        path: 'neo'
                    },
                    query: {
                        sss: 'sss'
                    }
                };
                this.$router.push(params);
            }
        },
        mounted: function() {
            console.log(this.$route);
            console.log(this.a, this.b, this.id);
        }
    }
</script>

<style lang="less" scoped>
    .container{
        border: 1px solid red;
        color: black;
    }
</style>