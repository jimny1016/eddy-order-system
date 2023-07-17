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
            <transition name="fade">
                <div v-if="isDivVisible" class="fixed bottom-0 left-0 w-full flex justify-center items-center mb-28">
                    <div class="p-4 rounded-md w-full max-w-3xl bg-gray-200">
                        <p>餐點已加入購物車</p>
                    </div>
                </div>
            </transition>
            <div v-show="cartLength > 0" class="fixed bottom-0 w-full max-w-3xl bg-blue-500 p-4 rounded-md mb-2 grid grid-cols-3">
                <div class="flex items-center">
                    <div class="border border-white text-center px-[2px] w-6 h-6 text-white rounded-full">
                        {{ cartLength }}
                    </div>                    
                </div>
                <div class="text-white text-lg font-bold flex">
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
    </div>
</template>

<script>
    import Navbar from './../navigationHeaderBar/NavigationHeaderBar.vue';
    import CategoryTabs from '../tabs/CategoryTabs.vue';
    import Menupage from './MenuPage.vue';
    import DishDetail from '../DishesDetail.vue';
    import ShoppingCart from '../ShoppingCart.vue';
    import MyImage from '../tools/MyImage.vue';
    import { shoppingCartMixin } from '../../ShopooingCartMixins.js'

    export default {
        name: 'my-menu',
        props: ['manuData'],
        components: {
            Navbar,CategoryTabs,Menupage,DishDetail,ShoppingCart,MyImage
        },
        mixins: [shoppingCartMixin],
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
            showDiv() {
                this.isDivVisible = true;
                setTimeout(() => {
                    this.isDivVisible = false;
                }, 1000);
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