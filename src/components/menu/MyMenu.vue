<template>
    <div class="max-w-3xl m-auto">
        <!--with navigation bar-->
        <div v-show="pageState == 0">
            <Navbar :tableNum="tableNum" :title="pageTitle" shoppingcartshow="true"/>
            <CategoryTabs class="w-full mx-auto" :tabList="tabList">
                <div v-for="(tab, index) in tabList" :key="index" >
                    <slot tabindex="${index}">{{ tab.tabLabel }}</slot>
                    <slot :tabindex="index">{{ tabNames[index] }}</slot>
                </div>
            </CategoryTabs>
            <Menupage :manuData="manuData[0].Display" @dishKey="getValue"/>
        </div>
        <!--without navigation bar showDishDetailPage-->
        <div v-if="pageState == 1">
            <DishDetail :dish="dish" @backToMenu="backToMenu" />
        </div>
        <div v-show="pageState == 2">
            <ShoppingCart />
        </div>
    </div>
</template>

<script>
import Navbar from './../navigationHeaderBar/NavigationHeaderBar.vue';
import CategoryTabs from '../tabs/CategoryTabs.vue';
import Menupage from './MenuPage.vue';
import DishDetail from '../DishesDetail.vue';
import ShoppingCart from '../ShoppingCart.vue';

export default {
    name: 'my-menu',
    props: ['manuData'],
    components: {
        Navbar,CategoryTabs,Menupage,DishDetail,ShoppingCart
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
        },
        cartLength() {
            return this.$store.getters.cart.length;
        },
        pageState() {
            return this.$store.getters.pageState;
        }
    },
    data() {
        return {       
            dish: null, //save variable 
            showDishDetailPage: false // 控制是否显示DishDetail组件
        };
    },
    methods: {
        getValue(value) {
            this.receivedValue = value;
            this.value = value; // 保存value到this.value
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

            let pageState = 0;
            if(value!=null && this.dish!=null){
                pageState = 1;                
            }
            this.$store.dispatch('updatePageState', {pageState: pageState });
        },
        backToMenu() {
            this.showDishDetailPage = false;
        },
        goToShippingCart() {

        }
    },
};
</script>

<style scoped>

</style>