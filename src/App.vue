<template>
  <div>
    <Slide></Slide>
  </div>
</template>

<script>
import Slide from './components/Carousel.vue'
//string ddd=
 // {
 //   /"Name/": /"Jimmy/"
 // };
//user myUser=Json.Convert.ToObject(ddd);
//alert(myUser.name);
export default {
  name: 'App',
  components: {
    Slide
  }
}
</script>