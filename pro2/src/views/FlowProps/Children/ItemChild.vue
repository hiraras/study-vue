<template>
    <div>{{ componentName }}</div>
</template>

<script>
export default {
    props: ['data'],
    data: function() {
        return {
            componentName: 'ItemChild',
        }
    },
    mounted: function() {
        // this.$emit('show');
        console.log(this.dataList);
        this.showDataList();
    },
    inject: ['dataList', 'showDataList'],
}
</script>

<style scoped>

</style>