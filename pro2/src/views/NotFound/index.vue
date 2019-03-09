<template>
    <div>
        <h2>404</h2>
        <button @click="back">back</button>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            // pathMath是匹配符*匹配到的字符串
            console.log(this.$route, this.$route.params.pathMatch);
        },
        methods: {
            back: function() {
                this.$router.go(-1);
            }
        },
    }
</script>