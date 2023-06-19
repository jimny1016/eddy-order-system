<script>
//import HelloWorld from './components/HelloWorld.vue'
//string ddd=
 // {
 //   /"Name/": /"Jimmy/"
 // };
//user myUser=Json.Convert.ToObject(ddd);
//alert(myUser.name);
export default {
  name: 'App',
 // components: {
  //  HelloWorld
 // }
}

var slider = new Vue({
  el: "#slider",
  data: {
    current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { className: "blue" },
      { className: "red" },
      { className: "yellow" }
    ]
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    }
  },
  mounted() {
    this.show = true;
  }
});
</script>

<template>

  <div calss="relative">
  <img class="w-full" img alt="Vue logo" src="./assets/logo.png">
  <div class="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">HelloWorld</div>
</div>
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> v-bind to msg--> 
<div id="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide" :class="slides[current].className">
        <p>I'm {{slides[current].className}}!</p>
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095
    </div>
  </div>

</template>




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
</style>
