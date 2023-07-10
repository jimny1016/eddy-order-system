<template>

  <MyHome></MyHome>
  <!-- <StoreTest></StoreTest> -->


  <!-- <RouterView/> -->
</template>

<script>
  // import { RouterView } from 'vue-router'
  import MyHome from './components/MyHome.vue';
  // import StoreTest from './components/StoreTest.vue';
  /**
   * 既定的方法
   * 在裡面可以傳東西給他
   */
  export default {
    name: 'App',
    components: {
      MyHome,
      //StoreTest
    },
  };
</script>