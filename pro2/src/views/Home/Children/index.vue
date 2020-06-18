<template>
    <div class="container">
        <p>this is children</p>
        <p>a:{{ a }} b:{{ b }} id:{{ id }}</p>
        <button @click="linkTo">linkTo</button>
    </div>
</template>

<script>
    export default {
        props: ['a', 'b'],
        methods: {
            linkTo: function() {
                const pathName = '/test/jacy';
                // 有name属性的情况会忽视path，没有name有path的情况会忽视params
                const linkToConfig = {
                    path: '/test/keo',
                    name: 'Test',
                    params: {
                        path: 'neo'
                    },
                    query: {
                        sss: 'sss'
                    }
                };
                this.$router.push(linkToConfig);
            }
        },
        computed: {
            id: function() {
                return this.$route.params.id;
            }
        },
        mounted: function() {
            console.log(this.$route);
        }
    }
</script>

<style lang="less" scoped>
    .container{
        border: 1px solid red;
        color: black;
    }
</style>