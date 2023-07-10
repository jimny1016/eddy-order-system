<template>
    <div class="relative bg-gray-400 text-center py-2">
        <div v-show="!isHomePage" class="text-center absolute ml-2">
            <a href="#" >{{tableNum}}</a>
        </div>
            <a href="#" >{{title}}</a>
        <div class="absolute top-[8px] right-0">
            <a href="#" class="mr-2 relative" v-show="!isHomePage" @click="shopping_cart()">
                <span class="cart">
                    <font-awesome-icon icon="cart-shopping" style="color: #1e90ff;" size="xl" />
                </span>
                <span class="absolute bottom-[-8px] right-0 bg-red-500 px-[2px] leading-[1.2] text-white text-sm rounded-sm">
                    {{ cartLength }}
                </span>
            </a>
            <a href="#" class="mr-2">
                <span class="lng">
                    <font-awesome-icon icon="globe" style="color: #1e90ff;" size="xl" />
                </span>
            </a>
        </div>
    </div>
</template>
    
<script>
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
        computed:{
            cartLength() {
                return this.$store.getters.cart.length;
            }
        },
        methods: {
            toggleActive(flag) {
                this.collapsed = flag;
            },
            shopping_cart(){
                this.$store.dispatch('updatePageState', {pageState: 2 });
            },
        },
    };

    
</script>
    
<style scoped>
</style>