<template>

    <div id="navbar">
        <!-- <div class="container mx-auto"> -->
            <ul>
                <li v-show="shoppingcartshow"><a href="#" class="navbar-brand">{{tableNum}}</a></li>
                <li><a href="#" class="navbar-brand">{{title}}</a></li>
                <li classs="li-cart">
                    <a href="#" class="navbar-cart" v-show="shoppingcartshow">
                        <span class="cart">
                            <font-awesome-icon icon="cart-shopping" style="color: #1e90ff;" size="xl"  @click="shopping_cart()"/>
                        </span>
                    </a>
                </li>
                <li class="li-lng">
                    <a href="#" class="navbar-lng">
                        <span class="lng">
                            <font-awesome-icon icon="globe" style="color: #1e90ff;" size="xl" />
                        </span>
                    </a>
                </li>
            </ul>
        <!-- </div> -->
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
            shoppingcartshow:{
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

    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    }

    li {
        float: left;   
    }

    li a {
    display: block;
    margin: 0;
    padding: 10px;
    background-color: #dddddd;
    }
    
    span.lng{
        text-align: right;
        }
    span.cart{
        text-align: right;    
    }
    
    /* Add additional styles to make the component full-width */
    .container {
    width: 100%;
    max-width: none;
    padding-left: 0;
    padding-right: 0;
    }

    #navbar {
        width: 100%;
        /* 其他樣式屬性... */
    }
</style>