<template>
<div>
    <Navbar :tableNum="tableNum" :title="pageTitle" shoppingcartshow="true"/>
<br>
<br>
    <CategoryTabs class="w-full lg:w-10/12 mx-auto mb-16" :tabList="tabList">
        <div v-for="(tab, index) in tabList" :key="index" >
            <slot tabindex="${index}">{{ tab.tabLabel }}</slot>
            <slot :tabindex="index">{{ tabNames[index] }}</slot>
        </div>
    </CategoryTabs>
    <Menupage :manuData="manuData[0].Display"/>

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
    computed:{
        tableNum(){
            return this.manuData[0].TableNum;
        },
        pageTitle() {
            return this.manuData[0].PageTitle;
        },
        tabList(){
            // 從 manuData 中取得 tabList 的值
            if (this.manuData[0].Display) {
                return this.manuData[0].Display.map(tab=>tab.TabName);
            } else {
                return [];
            }
        }
    },
    data() {
        return {
       // tabList: ["Recommendation", "Classic Combo", "a la carte - Rice", "a la carte - Noodle","a la carte - Side Dish","a la carte - Soup","a la carte - Beverage"],
        };
    },
};
</script>

<style scoped>

</style>