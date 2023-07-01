<template>

<MyHome></MyHome>


<!-- <RouterView/> -->
</template>

<script>
// import { RouterView } from 'vue-router'
import MyHome from './components/MyHome.vue';
//string ddd=
 // {
 //   /"Name/": /"Jimmy/"
 // };
//user myUser=Json.Convert.ToObject(ddd);
//alert(myUser.name);
/**
 * 既定的方法
 * 在裡面可以傳東西給他
 */
  export default {
    name: 'App',
    components: {
      MyHome
    },
  };
//  export default {
 //   components: {
    //  RouterLink,
 //     RouterView
 //   }
 // }

</script>