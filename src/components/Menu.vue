<template>
<div>
    <div>
        <Navbar tableNum="3" title="Welcom to xxx restaurant"/>
    </div><br><br>

    <CategoryTabs class="w-full lg:w-10/12 mx-auto mb-16" :tabList="tabList">
    <div v-for="(tab, index) in tabList" :key="index" >
        <slot  tabindex=${index}>{{ tab }}</slot>
    </div>
    </CategoryTabs>

    <MenuDetail/>
    <ShoppingCart/>
</div>
</template>

<script>
import Navbar from './NavigationHeaderBar.vue';
import CategoryTabs from './CategoryTabs.vue';
import MenuDetail from './MenuDetail.vue';
import ShoppingCart from './ShoppingCart.vue';
    export default {
    name: 'MenuScript',
    components: {
    Navbar,CategoryTabs,ShoppingCart,MenuDetail,
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