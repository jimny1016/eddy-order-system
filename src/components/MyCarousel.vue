<template>
  <div>
      <transition-group tag="div" :name="transitionName" class="slides-group h-[100vh]">
        <div :key="current" class="slide w-full h-full lg:h-screen bg-center bg-clip-border bg-cover bg-no-repeat absolute">
          <div class="relative w-full h-full">
            <img :src="getImagePath(slides[current].restaurantbg)" class="object-cover w-full h-full" alt="" />
          </div>
        </div>
      </transition-group>
      <div v-show="current > 0" class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
        <img :src="getImagePath('image/slick/arrow-circle-left-solid.svg')">
      </div>
      <div v-show="current < 2" class="btn btn-next" aria-label="Next slide" @click="slide(1)">
        <img :src="getImagePath('image/slick/arrow-circle-right-solid.svg')">
      </div>   
      <button v-show="current == 2" class="center start-ordering" @click="switchToMyMenu()">Start Ordering</button>    
  </div>        
</template>
  
<script>
import { IMAGE_PATH } from '../script/config.js';

  export default {
    name: "my-carousel",
    data() {
      return {
        imgPath:IMAGE_PATH,
        current: 0,
        direction: 1,
        transitionName: "fade",
        show: false,
        slides: [
          { restaurantbg: "/image/slick/restaurant-bg-1.jpg" },
          { restaurantbg: "/image/slick/restaurant-bg-2.jpg" },
          { restaurantbg: "/image/slick/restaurant-bg-3.jpg" },
        ],
      };
    },
    methods: {
      slide(dir) {
        this.direction = dir;
        var len = this.slides.length;
        this.current = ((this.current + dir) % len + len) % len;
      },
      strOrder(){
        var len = this.slides.length;
        this.current===len?this.isShow=true :this.isShow=false;
      },
      getImagePath(path) {
        //return "http://localhost:8080/" + path;
        return `${this.imgPath}`+ path;
      },
      switchToMyMenu() {
        this.$emit('showMyMenu', false);
      }      
    },
    computed: {
      showStarOrder() {
        return this.current % 2 == 0;
      },
    },    
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Crimson+Text");

  .btn {
    z-index: 10;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
  }

  .btn-next {
    left: auto;
    right: 1%;
  } 

  .btn:hover {
    transform: scale(1.1);
  }
  .center {
    margin: 0;
    /* position: absolute; */
    position: fixed;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width:150px;
    height:50px;
    bottom: 20px; /* 距離頁面底部的距離 */
  }
  .start-ordering {
    background-color: #1e90ff;
    color: white;
    border: 2px solid #1e90ff;
    border-radius: 5px;
    padding: 10px;
  }

</style>