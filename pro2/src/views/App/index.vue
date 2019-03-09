<template>
    <div class="container">
        <p>this is app</p>
        <router-link to="/home/2">to home</router-link>
    </div>
</template>

<script>
    import Home from '../Home/index.vue';
    export default {
        data() {
            return {
                a: 1,
            };
        },
        mounted: async function() {
            const p = new Promise(function(resolve, reject) {
                setTimeout(() => {
                    resolve(456)
                }, 1000)
            });
            this.a = await p;
            console.log(this.$route);
        },
        components: {
            Home,
        }
    }
</script>

<style scoped lang="less">
    .container{
        color: red;
    }
</style>