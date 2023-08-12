<template>
    <!-- 其他的程式碼 -->
    {{ cart }}
    <!-- <div v-for="item in cart" :key="item.product.id">
      <h2>{{ item.product.name }}</h2>
      <p>Quantity: {{ item.quantity }}</p>
      <button @click="updateCartQuantity(item.product, item.quantity + 1)">Add More</button>
      <button @click="updateCartQuantity(item.product, item.quantity - 1)">Remove One</button>
      <button @click="removeFromCart(item.product)">Remove from Cart</button>
    </div> -->
    <!-- 其他的程式碼 -->
  </template>
  
  <script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default {    
        data() {
            return {
                cartTest:[]
            };
        },
        setup() {
            const store = useStore();
            var ddd = {
                        title: "招牌蛋炒飯",
                        dishKey:"recommend_1",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 90,
                        options: [
                        {
                            type:2,//1=check box, 2=radio button, 3=textBox, 4=count
                            requirement:true,//0=option, 1=required
                            key:1,//1=辣度選擇,2=加購,3=備註
                            name:"辣度選擇",
                            memo:"Please Select 1 option",
                            optionVaules:[{
                            valueName:"不辣",
                            valueKey:"1",
                            price:0,
                            beChoise:false,
                            content:""
                            },{
                            valueName:"小辣",
                            valueKey:"2",
                            price:0,
                            beChoise: false,
                            content:""
                            },{
                            valueName:"中辣",
                            valueKey:"3",
                            price:0,
                            beChoise: false,
                            content:""
                            },{
                            valueName:"大辣",
                            valueKey:"4",
                            price:0,
                            beChoise: false,
                            content:""
                            }]
                        },
                        {
                            type:1,
                            requirement:false,
                            key:2,
                            name:"加購",
                            memo:"Recommendation",
                            optionVaules:[{
                            valueName:"Coca Cola",
                            valueKey:"1",
                            price:30,
                            beChoise:false,
                            content:""
                            },{
                            valueName:"Apple Sidra",
                            valueKey:"2",
                            price:40,
                            beChoise: false,
                            content:""
                            },{
                            valueName:"Pepsi",
                            valueKey:"3",
                            price:50,
                            beChoise: false,
                            content:""
                            },{
                            valueName:"Sprite",
                            valueKey:"4",
                            price:60,
                            beChoise: false,
                            content:""
                            }]
                        },
                        {
                            type:4,//1=check box, 2=radio button, 3=textBox, 4=count
                            requirement:false,//0=option, 1=required
                            key:3,//1=辣度選擇,2=加購,3=備註
                            name:"加購",
                            memo:"若超過10人享用,請加選用餐人數",
                            optionVaules:[{
                            valueName:"增加人數",
                            valueKey:"1",
                            price:200,
                            beChoise:false,
                            content:"0"
                            }]
                        },
                        {
                            type:3,//1=check box, 2=radio button, 3=textBox, 4=count
                            requirement:false,//0=option, 1=required
                            key:4,//1=辣度選擇,2=加購,3=備註
                            name:"備註",
                            memo:"如有任何需求或打包服務請備註",
                            optionVaules:[{
                            valueName:"備註",
                            valueKey:"1",
                            price:0,
                            beChoise:false,
                            content:""
                            }]
                        },
                        ]
                    };
            var one = 1;
            store.dispatch('addToCart', {product: ddd, quantity: one });
            store.dispatch('addToCart', {product: ddd, quantity: one });

            const cart = computed(() => store.getters.cart);
            console.log(cart);
            const addToCart = (product, quantity) => {
                store.dispatch('addToCart', { product, quantity });
            };

            const removeFromCart = (product) => {
                store.dispatch('removeFromCart', product);
            };

            const updateCartQuantity = (product, quantity) => {
                store.dispatch('updateCartQuantity', { product, quantity });
            };

            return {
                cart,
                addToCart,
                removeFromCart,
                updateCartQuantity
            }
        }
    }
  </script>