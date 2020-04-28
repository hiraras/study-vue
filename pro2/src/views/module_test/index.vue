<template>
  <div>
    <button @click="back">back</button>
  </div>
</template>

<script>
    import * as T from './test';
    export default {
      data() {
        return {
          n: 1,
        }
      },
      mounted: function() {
        console.log(T);
      },
      methods: {
          back: function() {
              
          }
      },
    }
</script>
