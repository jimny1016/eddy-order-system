<template>
<!--
  <div>
    <button @click="switchDisplay(true)">Show slider</button>
  </div>
-->

  <Slider v-if="showSlider" />
  <MyMenu v-if="!showSlider" />
 
    <button class="center" @click="switchDisplay(false)" v-show="showSlider">Start Ordering</button>
 
</template>

<script>
  import Slider from './Carousel.vue';
  import MyMenu from './menu/MyMenu.vue';

  export default {
      name: "my-home",
      data() {
        return {
          showSlider: true,
        }
      },
      components: {
        Slider,
        MyMenu
      },
      // computed: {
      //   showA() {
      //     return this.display === DisplayEnum.AEnum;
      //   },
      //   showB() {
      //     return this.display === DisplayEnum.BEnum;
      //   },
      //   showC() {
      //     return this.display === DisplayEnum.CEnum;
      //   }
      // },
      methods: {
        switchDisplay(value) {
          this.showSlider = value;
        }
      }
  };
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:150px;
  height:50px;
}
</style>