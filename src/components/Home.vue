<template>

  <div>
    <Navbar tableNum=3 title="Welcom to xxx restaurant"/>
  </div><br><br>

<!--

    <Slider/>
 --> 

  <div>
    <CategoryTabs class="w-full lg:w-10/12 mx-auto mb-16" :tabList="tabList">
      <div v-for="(tab, index) in tabList" :key="index" >
        <slot  tabindex=${index}>{{ tab }}</slot>
      </div>
    </CategoryTabs>
  </div>
<Menupage/>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Slider from './components/Carousel.vue';
import Navbar from './components/NavigationHeaderBar.vue';
import CategoryTabs from './components/CategoryTabs.vue';
import Menupage from './components/Menu.vue';
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
  name: 'home',
  components: {
  //  HelloWorld, Slider,
  Navbar,CategoryTabs,Menupage,
  },
  data() {
      return {
      tabList: ["Recommendation", "Special Combo", "a la carte - Rice", "a la carte - Noodle","a la carte - Side Dish","a la carte - Soup","a la carte - Beverage"],
      };
  },
};



</script>