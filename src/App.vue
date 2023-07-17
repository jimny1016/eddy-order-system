<template>

  <MyHome></MyHome>
  <!-- <StoreTest></StoreTest> -->

  <!-- <FadeTest></FadeTest> -->
  <!-- <RouterView/> -->
</template>

<script>
  // import { RouterView } from 'vue-router'
  import MyHome from './components/MyHome.vue';
  // import StoreTest from './components/StoreTest.vue';
  // import FadeTest from './components/FadeTest.vue';
  
  /**
   * 既定的方法
   * 在裡面可以傳東西給他
   */
  export default {
    name: 'App',
    components: {
      MyHome,
      //StoreTest,
      //FadeTest,
    },
  };
</script>
<style scoped>
  html {
    scroll-behavior: smooth;
  }
</style>