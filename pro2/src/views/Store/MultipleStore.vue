<template>
    <div>
        <p>storeA name: {{ moduleAName }}</p>
        <p>storeB name: {{ moduleBName }}</p>
        <p>getModuleAName: {{ getModuleAName }}</p>
        <p>getModuleBName: {{ getModuleBName }}</p>
        <p>objA: {{ objA }}</p>
        <button @click="changeObjA(2)">change A - action</button>
        <br />
        <button @click="mutationChangeAObj(20)">change A - mutation</button>
        <p>objB: {{ objB }}</p>
        <button @click="changeObjB(9)">change B -action</button>
        <br />
        <button @click="mutationChangeBObj(90)">change A - mutation</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data: function() {
        return {

        }
    },
    mounted() {
    },
    computed: {
        ...mapState({
            moduleAName: state => state.storeA.name,
            moduleBName: state => state.storeB.name,
            objA: state => state.storeA.obj,
            objB: state => state.storeB.obj,
        }),
        ...mapGetters({
            getModuleAName: 'storeA/getName',
        }),
        ...mapGetters('storeB', {
            getModuleBName: 'getName'
        }),
    },
    methods: {
        ...mapMutations({
            mutationChangeAObj: 'storeA/changeObj',
            mutationChangeBObj: 'storeB/changeObj'
        }),
        ...mapActions({
            changeObjA: 'storeA/changeObj',
            changeObjB: 'storeB/changeObj'
        }),
    }
}
</script>

<style scoped>

</style>
