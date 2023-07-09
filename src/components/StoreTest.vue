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
            var ddd = { name: "ddd", id: 1 };
            var one = 1;
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