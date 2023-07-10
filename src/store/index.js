import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],  // 購物車
  },
  mutations: {
    // 新增產品到購物車
    ADD_TO_CART(state, { product, quantity }) {
      try {
        if(state.cart && state.cart.length > 0)
        {
          let dishesInCart = state.cart.filter(item => {
            return item.product.DishKey === product.DishKey;
          });
      
          if (dishesInCart) { 
            for (let dishesInCartIndex = 0; dishesInCartIndex < dishesInCart.length; dishesInCartIndex++) {
              let isLivedInShoppingCart = true;
              let dishInCart = dishesInCart[dishesInCartIndex].product;
              if(dishInCart.Options)
              {
                for (let optionIndex = 0; optionIndex < dishInCart.Options.length; optionIndex++) {
                  if(!isLivedInShoppingCart) {
                    break;
                  }
                  let option = dishInCart.Options[optionIndex];
                  let targetOption = product.Options[optionIndex];

                  for (let optionVaulesIndex = 0; optionVaulesIndex < option.OptionVaules.length; optionVaulesIndex++) {
                    if(!isLivedInShoppingCart) {
                      break;
                    }
                    let optionValue = option.OptionVaules[optionVaulesIndex];
                    let targetOptionValue = targetOption.OptionVaules[optionVaulesIndex];
                    switch(option.Type) {
                      case 1:
                      case 2:
                        isLivedInShoppingCart = optionValue.BeChoise === targetOptionValue.BeChoise;
                        break;     
                      case 3:
                      case 4:
                        isLivedInShoppingCart = optionValue.Content === targetOptionValue.Content;
                        break;    
                      default:
                        throw new Error("Option type not included.");
                    }
                  }
                }
              }

              if(isLivedInShoppingCart) {
                dishesInCart[dishesInCartIndex].quantity += quantity;
                return;
              }
            }
          }
        }

        state.cart.push({
            product,
            quantity
        });
      } catch (error) {
        alert('新增餐點發生錯誤。');
        return;
      } 
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