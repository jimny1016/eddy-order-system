<template>
<div>
    <div>
        <Navbar tableNum="3" title="Welcom to xxx restaurant"/>
    </div><br><br>

    <CategoryTabs class="w-full lg:w-10/12 mx-auto mb-16" :tabList="tabList">
        <div v-for="(tab, index) in tabList" :key="index" >
            <slot tabindex=${index}>{{ tab }}</slot>
        </div>
    </CategoryTabs>
    <Menupage :manuData="manuData"/>

</div>
</template>

<script>
import Navbar from './../navigationHeaderBar/NavigationHeaderBar.vue';
import CategoryTabs from '../tabs/CategoryTabs.vue';
import Menupage from './MenuPage.vue';

export default {
    name: 'my-menu',
    props: ['manuData'],
    components: {
    Navbar,CategoryTabs,Menupage,
    },
    data() {
        return {
        tabList: ["Recommendation", "Classic Combo", "a la carte - Rice", "a la carte - Noodle","a la carte - Side Dish","a la carte - Soup","a la carte - Beverage"],
        };
    },
};
</script>

<style scoped>

</style>