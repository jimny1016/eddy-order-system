<template>
  <Slider />
  <MyMenu v-if="false" />
</template>
  
<script>
  import Slider from './Carousel.vue';
  import MyMenu from './menu/MyMenu.vue';

  export default {
    name: "my-home",
    components: {
      Slider,
      MyMenu
    },
  };
</script>

<style scoped>
</style>