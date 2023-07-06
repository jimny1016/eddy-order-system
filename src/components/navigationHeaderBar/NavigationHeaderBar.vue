<template>
    <div class="relative bg-gray-400 text-center py-2">
        <div v-show="!isHomePage" class="text-center absolute ml-2">
            <a href="#" >{{tableNum}}</a>
        </div>
            <a href="#" >{{title}}</a>
        <div class="absolute top-[8px] right-0">
            <a href="#" class="mr-2">
                <span class="cart">
                    <font-awesome-icon icon="cart-shopping" style="color: #1e90ff;" size="xl"  @click="shopping_cart()"/>
                </span>
            </a>
            <a href="#" v-show="!isHomePage" class="mr-2">
                <span class="lng">
                    <font-awesome-icon icon="globe" style="color: #1e90ff;" size="xl" />
                </span>
            </a>
        </div>
    </div>
</template>
    
<script>
import { router } from '../../router/index.js';

    export default {
        name: 'NavigationHeaderBar',
        props: {
            tableNum: {
                type: Number,
                required: true,
            },
            title:{
                type: String,
                required: true,
            },
            isHomePage:{
                type: Boolean,
                required: true,
            }
        },
        data() {
            return {
            collapsed: true,
            };
        },
        methods: {
            toggleActive(flag) {
                this.collapsed = flag;
            },
            shopping_cart(){
                router.push('/shoppingcart');
            },
        },
    };

    
</script>
    
<style scoped>
</style>