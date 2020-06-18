<template>
    <div class="container">
        <p>this is app</p>
        <p>a: {{ a }}</p>
        <router-link to="/home/2">to home</router-link>
    </div>
</template>

<script>
    export default {
        props: ['meta'],
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
            console.log('meta:', this.meta);
        },
        components: {
        },
        // 离开组件前调用的vue-router的生命周期钩子
        beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        color: red;
    }
</style>