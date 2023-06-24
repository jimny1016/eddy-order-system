<template>
  <Slider />      
  <div>
    <Navbar tableNum="3" title="Welcom to xxx restaurant"/>
  </div>
  <br>
  <br>
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
  import Slider from './Carousel.vue';
  import Navbar from './NavigationHeaderBar.vue';
  import CategoryTabs from './CategoryTabs.vue';
  import Menupage from './Menu.vue';

  export default {
    name: "my-home",
    components: {
      Slider,
      Navbar,
      CategoryTabs,
      Menupage,
    },
    data() {
      return {
        tabList: ["Recommendation", "Special Combo", "a la carte - Rice", "a la carte - Noodle","a la carte - Side Dish","a la carte - Soup","a la carte - Beverage"],
      };
    },
  };
</script>

<style scoped>
</style>