import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [{product:{name: "ddd", id: 1}, quantity: 1}],  // 購物車
  },
  mutations: {
    // 新增產品到購物車
    ADD_TO_CART(state, { product, quantity }) {
        if(state.cart && state.cart.length > 0)
        {
            let productInCart = state.cart.find(item => {
                return item.product.id === product.id;
            });
        
            if (productInCart) {
                productInCart.quantity += quantity;
                return;
            }
        }

        state.cart.push({
            product,
            quantity
        });
    },

    // 從購物車中移除產品
    REMOVE_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
      });
    },

    // 修改購物車中的產品數量
    UPDATE_CART_QUANTITY(state, { product, quantity }) {
      let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
      });

      if (productInCart) {
        productInCart.quantity = quantity;
      }
    },
  },
  actions: {
    addToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },

    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    },

    updateCartQuantity({ commit }, { product, quantity }) {
      commit('UPDATE_CART_QUANTITY', { product, quantity });
    },
  },
  getters: {
    cart: state => state.cart
  }
});