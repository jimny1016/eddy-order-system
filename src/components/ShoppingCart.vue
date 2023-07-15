<template>
    <div>
        <div class="flex py-4">
            <div @click="backToMenu()" class="cursor-pointer">
                <MyImage imagePath="/image/icon/previous-blue.png" firstLayerClass="mr-2 z-10 !w-auto !h-auto" secondLayerClass="!w-auto !h-auto" imageClass="!w-10 !h-10" />
            </div>
            <div class="text-2xl font-semibold self-center">
                購物車
            </div>
        </div>
        <div v-show="cart && cart.length < 1" class="absolute-center">
            <MyImage imagePath="/image/icon/shopping-bag.png" firstLayerClass="mr-2 z-10 !w-auto !h-auto" secondLayerClass="!w-auto !h-auto" imageClass="!w-[40vw] max-w-[302px]" />
            <div class="text-center text-gray-700 text-lg font-bold mt-2 mb-4">尚未有訂單成立</div>
            <div @click="backToMenu()" class="text-center text-lg font-bold text-blue-600 cursor-pointer">立即點餐</div>
        </div>
        <div v-show="cart && cart.length > 0">
            <div class="text-lg font-semibold my-2">
                您的餐點
            </div>
            <div>
                <div v-for="(dish, dishIndex) in cart" :key="'dish-' + dishIndex" class="mb-8 w-full grid grid-cols-7">
                    <div class="flex">
                        <MyImage imagePath="/image/icon/minus.png" @click="()=>{ changeDishQuantity(dishIndex, dish.quantity - 1); }"  firstLayerClass="!w-auto !h-auto cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-8 !h-8" />
                        <div class="mx-2 self-center text-center text-lg">{{ dish.quantity }}</div>
                        <MyImage imagePath="/image/icon/plus.png" @click="()=>{ changeDishQuantity(dishIndex, dish.quantity + 1); }"  firstLayerClass="!w-auto !h-auto cursor-pointer" secondLayerClass="!w-auto !h-auto" imageClass="!w-8 !h-8" />
                    </div>
                    <div class="col-span-5 self-center text-xl font-bold">
                        {{ dish.product.title }}
                    </div>
                    <div class="self-center text-right text-lg ">
                        $ {{ getDishPrice(dish) }}
                    </div>
                    <div></div>
                    <div class="col-span-5">{{ getOptionWord(dish.product.Options) }}</div>
                    <div></div>
                </div>
            </div>
            <div class="flex justify-between mb-2">
                <div class="text-xl font-semibold">
                    小計
                </div>
                <div class="text-xl">
                    $ {{ getLittlePrice(cart) }}
                </div>
            </div>
            <div class="flex justify-between mb-8">
                <div class="text-xl font-semibold">
                    服務費
                </div>
                <div class="text-xl">
                    $ {{ getServicePrice(cart) }}
                </div>
            </div>
            <div class="flex justify-between mb-8">
                <div class="text-2xl font-bold">
                    總金額
                </div>
                <div class="text-2xl font-bold">
                    $ {{ getTotalPrice(cart) }}
                </div>
            </div>
        </div>
        <div v-show="cart && cart.length > 0" class="!fixed left-0 bottom-0 w-[100vw] z-10!h-auto p-4 bg-white">
            <div class="flex justify-between max-w-3xl m-auto items-center">
                <div @click="backToMenu()" class="bg-blue-400 px-2 sm:px-14 py-2 rounded-md text-white text-center text-md sm:text-2xl self-center cursor-pointer">添加新的餐點</div>
                <div @click="sentShoppingCart(cart)" class="bg-blue-400 px-2 sm:px-14 py-2 rounded-md text-white text-center text-md sm:text-2xl self-center cursor-pointer">立即下單結帳</div>
            </div>
        </div>
        <!-- {{ cart }} -->
    </div>
</template>

<script>
    import MyImage from './tools/MyImage.vue';
    export default {
        components: {
            MyImage,
        },
        data() {
            return {
            };
        },
        computed:{
            cart() {
                return this.$store.getters.cart;
            }
        },
        methods: {
            backToMenu(){
                this.$store.dispatch('updatePageState', {pageState: 0 });
            },
            changeDishQuantity(dishIndex, quantity){
                this.$store.dispatch('updateCartQuantity', {dishIndex, quantity });
            },
            getOptionWord(options){
                let result = [];
                if(options){
                    options.forEach((option) => {                    
                        option.OptionVaules.forEach((optionVaule) => {
                            switch(option.Type) {
                            case 1:
                            case 2:
                                if(optionVaule.BeChoise)
                                    result.push(optionVaule.ValueName);
                                break;
                            case 3:
                                if(optionVaule.Content)
                                    result.push('備註:' + optionVaule.Content);                                
                                break;
                            }
                        });
                    });
                }
                

                if(result.length > 0)
                    return result.join(', ');
                else
                    return '';
            },
            getDishPrice(dish){
                var product = dish.product;
                let result = product.price;
                if(product.Options){
                    product.Options.forEach((option) => {
                        option.OptionVaules.forEach((optionVaule) => {
                            switch(option.Type) {
                            case 1:
                            case 2:
                                if(optionVaule.BeChoise)
                                    result += optionVaule.Price;
                                break;
                            case 3:
                                if(optionVaule.Content)
                                    result += optionVaule.Price;
                                break;
                            case 4:
                                if(parseInt(optionVaule.Content) > 0)
                                    result += parseInt(optionVaule.Content) * optionVaule.Content;  
                                break;
                            }
                        });
                    });
                }

                return result * dish.quantity;
            },
            getLittlePrice(cart){
                let result = 0;
                cart.forEach((dish) => {
                    result += this.getDishPrice(dish);
                });
                return result;
            },
            getServicePrice(cart){
                return this.getLittlePrice(cart) * 0.1;
            },
            getTotalPrice(cart){
                return this.getLittlePrice(cart) + this.getServicePrice(cart);
            },
            sentShoppingCart(cart){
                alert('訂單已送出!');
                cart.forEach((dish, index) => {
                    this.$store.dispatch('updateCartQuantity', {dishIndex:index, quantity:0 });
                });
                this.backToMenu();
            }
        }
    };
</script>

<style scoped>

</style>