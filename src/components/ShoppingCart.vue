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
        <div>
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
        </div>
        {{ cart }}
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

                if(result.length > 0)
                    return result.join(', ');
                else
                    return '';
            },
            getDishPrice(dish){
                var product = dish.product;
                let result = product.price;
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

                return result * dish.quantity;
            }
        }
    };
</script>

<style scoped>

</style>