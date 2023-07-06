<template>
  <div id="my-slider">
      <transition-group tag="div" :name="transitionName" class="slides-group">
        <div :key="current" class="slide w-full h-full lg:h-screen bg-center bg-clip-border bg-cover bg-no-repeat relative">
          <div class="relative w-full h-full">
            <img :src="getImagePath(slides[current].restaurantbg)" class="object-cover w-full h-full" alt="" />
          </div>
        </div>
      </transition-group>
      <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
        <img :src="getImagePath('image/slick/arrow-circle-left-solid.svg')">
      </div>
      <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
        <img :src="getImagePath('image/slick/arrow-circle-right-solid.svg')">
      </div>      
  </div>        
</template>
  
<script>
  export default {
    name: "my-slider",
    data() {
      return {
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
        dir === 1
          ? (this.transitionName = "slide-next")
          : (this.transitionName = "slide-prev");
        var len = this.slides.length;
        this.current = ((this.current + dir) % len + len) % len;
      },
      strOrder(){
        var len = this.slides.length;
        this.current===len?this.isShow=true :this.isShow=false;
      },
      getImagePath(path) {
        return "http://localhost:8080/" + path;
      },
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

  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }

  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-next-enter {
    transform: translate(100%);
  }
  .slide-next-leave-to {
    transform: translate(-100%);
  }

  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }

  .slide-prev-enter {
    transform: translate(-100%);
  }

  .slide-prev-leave-to {
    transform: translate(100%);
  }

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

</style>