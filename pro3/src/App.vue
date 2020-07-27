<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>{{ countPlusOne }}</p>
    <button @click="increment">click</button>
  </div>
</template>

<script>
// 目前还没有，等3.0发布了再全部看一遍，试一下
import { ref, computed, watch } from 'vue';
export default {
  setup() {
    const count = ref(0)
    const countPlusOne = computed(() => this.count + 1)

    watch(() => this.count, () => {
      console.log('count is changed')
    })

    const increment = () => {
      count.value ++;
    }

    return {
      count,
      increment,
      countPlusOne
    }
  },
}
</script>

<style>
</style>
