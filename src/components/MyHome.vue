<template>
  <!-- <div><button @click="switchDisplay(true)">Show slider</button></div>
  <div><button @click="switchDisplay(false)">Show MyMenu</button></div> -->
  <Slider v-if="showSlider" restraunt="myUser.restrauntbgs" />
  <MyMenu v-if="!showSlider" />

</template>
  
<script>
  import Slider from './Carousel.vue';
  import MyMenu from './menu/MyMenu.vue';

  export default {
    name: "my-home",
    data() {
      return {
        showSlider: true,
        //myUser: ''
      }
    },
    components: {
      Slider,
      MyMenu
    },
    //created: {
      //string ddd=
      // {
      //   /"Name/": /"Jimmy/"
      // };
      //this.myUser = JSON.parse(ddd);
    //},
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

  // const DisplayEnum = {
  //   AEnum: 'AEnum',
  //   BEnum: 'BEnum',
  //   CEnum: 'CEnum',
  // }
</script>

<style scoped>
</style>