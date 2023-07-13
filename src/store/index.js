import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],  // 購物車
    pageState: 0 //0 my menu, 1 dish detail, 2 shopping cart
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
                    //alert(optionValue.Name + ":" + String(optionValue.BeChoise) + " " + String(targetOptionValue.BeChoise) + " " + String(optionValue.BeChoise === targetOptionValue.BeChoise));
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

    // 修改購物車中的產品數量
    UPDATE_CART_QUANTITY(state, { dishIndex, quantity }) {
      if(quantity == 0) {
        state.cart.splice(dishIndex, 1);
        return;
      }

      state.cart[dishIndex].quantity = quantity;
    },

    UPDATE_PAGE_STATE(state, { pageState }) {
      state.pageState = pageState;
    },
  },
  actions: {
    addToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },

    updateCartQuantity({ commit }, { dishIndex, quantity }) {
      commit('UPDATE_CART_QUANTITY', { dishIndex, quantity });
    },

    updatePageState({ commit }, { pageState }) {
      commit('UPDATE_PAGE_STATE', { pageState });
    },
  },
  getters: {
    cart: state => state.cart,
    pageState: state => state.pageState
  }
});