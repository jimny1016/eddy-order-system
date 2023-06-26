<template>
  <!--Reference: https://vuejsexamples.com/10-vue-carousel-code-examples/-->
  <div id="my-slider">
      <transition-group tag="div" :name="transitionName" class="slides-group">
        <div :key="current" class="slide w-full h-full lg:h-screen bg-center bg-clip-border bg-cover bg-no-repeat relative">
          <div class="relative w-full h-full">
                <img :src="getImagePath(slides[current].restaurantbg)" class="object-cover w-full h-full" alt="" />
                <!-- <img src="../image/slick/restaurant-bg-1.jpg" class="object-cover w-full h-full" alt="" /> -->
            </div>
          <!-- <p>I'm {{slides[current].className}}!</p> -->
        </div>        
      </transition-group>
      <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
        &#10094;
      </div>
      <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
        &#10095;
      </div>
      
  </div>
  
  <div v-show="showStarOrder"><button @click="strOrder">Start Ordering</button></div>
      
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
    computed: {
      showStarOrder() {
        return this.current % 2 == 0;
      },
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
    }
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

/* GO TO NEXT SLIDE */
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

/* GO TO PREVIOUS SLIDE */
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

/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100vh;
  /* position: absolute; */
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
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