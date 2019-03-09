<template>
    <div>
        <p>this is Home, id: {{ id }}</p>
        <router-link to="/test/jack">to Test</router-link>
        <router-view class="padding_space"></router-view>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data: function() {
        return {

        }
    },
    computed: {
        // id: function() {
        //     return this.$route.params.id
        // }
    },
    mounted: function() {
        console.log(this.$route);
        console.log(this);
    },
    components: {
    }
}
</script>

<style scoped>
    .container {
        color: green;
    }
    .padding_space {
        padding: 8px;
    }
</style>
