<template>
    <div>this is test children {{ data }} id: {{ path }}</div>
</template>

<script>
    export default {
        props: ['data', 'path'],
        mounted: function() {
            console.log(this.$route);
        }
    }
</script>