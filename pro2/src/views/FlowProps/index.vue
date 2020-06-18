<template>
    <div>
        <div>{{ componentName }}</div>
        <Item :data="dataList" @show="showDataList"></Item>
    </div>
</template>

<script>
import Item from './Children/Item';
export default {
    data: function() {
        return {
            componentName: 'father',
            dataList: ['today', 'nextWeek', 'nextYear']
        }
    },
    components: {
        Item
    },
    methods: {
        showDataList() {
            console.log(this.dataList);
        }
    },
    provide: function() {
        return {
            showDataList: this.showDataList,
            dataList: this.dataList
        }
    }
}
</script>

<style scoped>

</style>