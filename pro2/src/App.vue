<template>
    <div class="container">
        {{ a }}
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped lang="less">
    .container{
        color: red;
    }
</style>