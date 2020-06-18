<template>
    <div>
        <div>{{ componentName }}</div>
        <item-child @show="$emit('show')"></item-child>
    </div>
</template>

<script>
import ItemChild from './ItemChild';
export default {
    props: ['data'],
    data: function() {
        return {
            componentName: 'Item',
        }
    },
    created: function() {
        // this.$emit('show');
    },
    components: {
        ItemChild
    }
}
</script>

<style scoped>

</style>