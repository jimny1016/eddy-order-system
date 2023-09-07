<template>
    <div class="max-w-3xl m-auto">
        <!--with navigation bar-->
        <div v-show="pageState == 0">
            <div class=" fixed max-w-3xl z-10 bg-white">
                <Navbar :tableNum="tableNum" :title="pageTitle" shoppingcartshow="true"/>
                <CategoryTabs class="w-full mx-auto" :tabList="tabList">
                    <div v-for="(tab, index) in tabList" :key="index" >
                        <slot tabindex="${index}">{{ tab.tabLabel }}</slot>
                        <slot :tabindex="index">{{ tabNames[index] }}</slot>
                    </div>
                </CategoryTabs>
            </div>
                <div>{{ this.$store.getters.cart }}</div>
                <div>
                    <button @click="postTest">Post test</button>
                </div>
            <Menupage :manuData="manuData[0].display" @dishKey="getValue"/>
            <transition name="fade">
                <div v-if="isDivVisible" class="fixed bottom-0 left-0 w-full flex justify-center items-center mb-20">
                    <div class="p-4 rounded-md w-full max-w-3xl bg-gray-200">
                        <p>餐點已加入購物車</p>
                    </div>
                </div>
            </transition>
            <div v-show="cartLength > 0" @click="() =>{this.$store.dispatch('updatePageState', {pageState: 2 });}" class="fixed bottom-0 w-full max-w-3xl bg-blue-500 p-4 rounded-md mb-2 grid grid-cols-4 cursor-pointer">
                <div class="flex items-center">
                    <div class="border border-white text-center px-[2px] w-6 h-6 text-white rounded-full">
                        {{ cartLength }}
                    </div>                    
                </div>
                <div class="text-white text-lg font-bold flex col-span-2">
                    <MyImage imagePath="/image/icon/shopping-cart-white.png" firstLayerClass="mr-2 z-1 !w-auto !h-auto" secondLayerClass="!w-auto !h-auto" imageClass="!w-6 !h-6" />
                    檢視購物車
                </div>
                <div class="flex items-center justify-end mr-4 text-white">
                    NT${{ getTotalPrice(cart) }}
                </div>
            </div>
        </div>
        <!--without navigation bar showDishDetailPage-->
        <div v-if="pageState == 1">
            <DishDetail :dish="dish" @showAddSuccess="showDiv" />
        </div>
        <div v-show="pageState == 2">
            <ShoppingCart :tableNum="tableNum" />
        </div>
        <div v-show="pageState == 3">
            <DishesDetailUpdate />
        </div>
        <div v-if="pageState == 4">
            <DishesDetailCombo @showAddSuccess="showDiv" />
        </div>
        <div v-if="pageState == 5">
            <DishesDetailComboDetail />
        </div>
        <div v-if="pageState == 6">
            <DishesDetailComboUpdate />
        </div>
        <div v-if="pageState == 7">
            <DishesDetailComboDetailUpdate />
        </div>
    </div>
</template>

<script>
    import Navbar from './../navigationHeaderBar/NavigationHeaderBar.vue';
    import CategoryTabs from '../tabs/CategoryTabs.vue';
    import Menupage from './MenuPage.vue';
    import DishDetail from '../DishesDetail.vue';
    import DishesDetailUpdate from '../DishesDetailUpdate.vue';
    import DishesDetailCombo from '../DishesDetailCombo.vue';
    import DishesDetailComboDetail from '../DishesDetailComboDetail.vue';
    import DishesDetailComboUpdate from '../DishesDetailComboUpdate.vue';
    import DishesDetailComboDetailUpdate from '../DishesDetailComboDetailUpdate.vue';
    import ShoppingCart from '../ShoppingCart.vue';
    import MyImage from '../tools/MyImage.vue';
    import { shoppingCartMixin } from '../../ShopooingCartMixins.js'
    import axios from 'axios';

    export default {
        name: 'my-menu',
        props: ['manuData'],
        components: {
            Navbar,CategoryTabs,Menupage,DishDetail,ShoppingCart,MyImage,DishesDetailUpdate,DishesDetailCombo,DishesDetailComboDetail,DishesDetailComboUpdate,DishesDetailComboDetailUpdate
        },
        mixins: [shoppingCartMixin],
        computed:{
            tableNum(){
                return this.manuData[0].tableNum;
            },
            pageTitle() {
                return this.manuData[0].pageTitle;
            },
            tabList(){
                // 從 manuData 中取得 tabList 的值
                if (this.manuData[0].display) {
                    return this.manuData[0].display.map(tab=>tab.tabName);
                } else {
                    return [];
                }
            },
            cartLength() {
                return this.$store.getters.cart.length;
            },
            pageState() {
                return this.$store.getters.pageState;
            },
            cart() {
                return this.$store.getters.cart;
            }
        },
        data() {
            return {       
                dish: null, //save variable 
                isDivVisible: false
            };
        },
        methods: {
            getValue(value) {
                this.manuData[0].display.forEach(tab => {
                    var temp = tab.dishes.find(dish => dish.dishKey === value);
                    if(temp)
                    {
                        this.dish = temp;
                    }                    
                });

                let pageState = 0;
                if(value!=null && this.dish!=null){
                    pageState = 1;
                    if(this.dish.isCombo){
                        pageState = 4;
                        this.$store.dispatch('updateTempCombo', {tempCombo: this.dish });
                    }                        
                }
                this.$store.dispatch('updatePageState', {pageState: pageState });
            },
            showDiv() {
                this.isDivVisible = true;
                setTimeout(() => {
                    this.isDivVisible = false;
                }, 1000);
            },
            postTest(){
                alert('I am here');
                var shoppingCartData = this.$store.getters.cart;
                axios.post('http://localhost:5126/weatherforecast/PostShoppingCart', shoppingCartData)
                .then(
                    response=>{console.log(response.data);
                })
                .catch(error=>{console.error(error);});
            }
        },
    };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>