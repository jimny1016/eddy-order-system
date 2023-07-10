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
                        DishKey:"recommend_1",
                        unit: "一份",
                        imgPath: "../src/image",
                        price: 90,
                        Options: [
                        {
                            Type:2,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:true,//0=option, 1=required
                            Key:1,//1=辣度選擇,2=加購,3=備註
                            Name:"辣度選擇",
                            Memo:"Please Select 1 option",
                            OptionVaules:[{
                            ValueName:"不辣",
                            ValueKey:"1",
                            Price:0,
                            BeChoise:false,
                            Content:""
                            },{
                            ValueName:"小辣",
                            ValueKey:"2",
                            Price:0,
                            BeChoise: false,
                            Content:""
                            },{
                            ValueName:"中辣",
                            ValueKey:"3",
                            Price:0,
                            BeChoise: false,
                            Content:""
                            },{
                            ValueName:"大辣",
                            ValueKey:"4",
                            Price:0,
                            BeChoise: false,
                            Content:""
                            }]
                        },
                        {
                            Type:1,
                            Requirement:false,
                            Key:2,
                            Name:"加購",
                            Memo:"Recommendation",
                            OptionVaules:[{
                            ValueName:"Coca Cola",
                            ValueKey:"1",
                            Price:30,
                            BeChoise:false,
                            Content:""
                            },{
                            ValueName:"Apple Sidra",
                            ValueKey:"2",
                            Price:40,
                            BeChoise: false,
                            Content:""
                            },{
                            ValueName:"Pepsi",
                            ValueKey:"3",
                            Price:50,
                            BeChoise: false,
                            Content:""
                            },{
                            ValueName:"Sprite",
                            ValueKey:"4",
                            Price:60,
                            BeChoise: false,
                            Content:""
                            }]
                        },
                        {
                            Type:4,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:false,//0=option, 1=required
                            Key:3,//1=辣度選擇,2=加購,3=備註
                            Name:"加購",
                            Memo:"若超過10人享用,請加選用餐人數",
                            OptionVaules:[{
                            ValueName:"增加人數",
                            ValueKey:"1",
                            Price:200,
                            BeChoise:false,
                            Content:"0"
                            }]
                        },
                        {
                            Type:3,//1=check box, 2=radio button, 3=textBox, 4=count
                            Requirement:false,//0=option, 1=required
                            Key:4,//1=辣度選擇,2=加購,3=備註
                            Name:"備註",
                            Memo:"如有任何需求或打包服務請備註",
                            OptionVaules:[{
                            ValueName:"備註",
                            ValueKey:"1",
                            Price:0,
                            BeChoise:false,
                            Content:""
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