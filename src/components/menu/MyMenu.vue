<template>
<!--with navigation bar-->
<div v-show="!showDishDetailPage">
    <Navbar :tableNum="tableNum" :title="pageTitle" shoppingcartshow="true"/>
<br>
<br>
    <CategoryTabs class="w-full lg:w-10/12 mx-auto mb-16" :tabList="tabList">
        <div v-for="(tab, index) in tabList" :key="index" >
            <slot tabindex="${index}">{{ tab.tabLabel }}</slot>
            <slot :tabindex="index">{{ tabNames[index] }}</slot>
        </div>
    </CategoryTabs>
    <Menupage :manuData="manuData[0].Display" @dishKey="getValue"/>
</div>

<!--without navigation bar showDishDetailPage-->
<div v-show="showDishDetailPage">
    <DishDetail :dish="dish"/>
</div>

</template>

<script>
import Navbar from './../navigationHeaderBar/NavigationHeaderBar.vue';
import CategoryTabs from '../tabs/CategoryTabs.vue';
import Menupage from './MenuPage.vue';
import DishDetail from '../DishesDetail.vue';

export default {
    name: 'my-menu',
    props: ['manuData'],
    components: {
        Navbar,CategoryTabs,Menupage,DishDetail
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
            dish: null, //save variable 
            showDishDetailPage: false // 控制是否显示DishDetail组件
        };
    },
    methods: {
        getValue(value) {
            this.receivedValue = value;
            this.value = value; // 保存value到this.value
            console.log("HI! "+value);

            // this.dish = this.manuData[0].Display
            // .find(tab => tab.TabName === 'Recommendation')
            // .Dishes.find(dish => dish.DishKey === value); // 设置this.dish的值

            var target;
            this.manuData[0].Display.forEach(tab => {
                var temp = tab.Dishes.find(dish => dish.DishKey === value);
                if(temp)
                {
                    target = temp;
                }                    
            });
            if(target)
                this.dish = target;
            console.log("HI!dish "+this.dish);

            if(value!=null && this.dish!=null){
                this.showDishDetailPage=true;
                console.log("showDishDetailPage "+this.showDishDetailPage);
            }else{
                this.showDishDetailPage=false;
            }

        }
        
    },
};
</script>

<style scoped>

</style>