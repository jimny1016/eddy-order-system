import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],  // 購物車
    pageState: 0, //0 my menu, 1 dish detail, 2 shopping cart
    beUpdatedCartCell: null,
    tempCombo: null,
    tempComboDishDetailKey: null
  },
  mutations: {
    // 新增產品到購物車
    ADD_TO_CART(state, { product, quantity }) {
      try {
        if(state.cart && state.cart.length > 0)
        {
          let dishesInCart = state.cart.filter(item => {
            return item.product.dishKey === product.dishKey;
          });
      
          if (dishesInCart) { 
            for (let dishesInCartIndex = 0; dishesInCartIndex < dishesInCart.length; dishesInCartIndex++) {
              let isLivedInShoppingCart = true;
              let dishInCart = dishesInCart[dishesInCartIndex].product;
              if(dishInCart.options)
              {
                for (let optionIndex = 0; optionIndex < dishInCart.options.length; optionIndex++) {
                  if(!isLivedInShoppingCart) {
                    break;
                  }
                  let option = dishInCart.options[optionIndex];
                  let targetOption = product.options[optionIndex];

                  for (let optionVaulesIndex = 0; optionVaulesIndex < option.optionVaules.length; optionVaulesIndex++) {
                    if(!isLivedInShoppingCart) {
                      break;
                    }
                    let optionValue = option.optionVaules[optionVaulesIndex];
                    let targetOptionValue = targetOption.optionVaules[optionVaulesIndex];
                    //alert(optionValue.name + ":" + String(optionValue.beChoise) + " " + String(targetOptionValue.beChoise) + " " + String(optionValue.beChoise === targetOptionValue.beChoise));
                    switch(option.type) {
                      case 1:
                      case 2:
                        isLivedInShoppingCart = optionValue.beChoise === targetOptionValue.beChoise;
                        break;     
                      case 3:
                      case 4:
                        isLivedInShoppingCart = optionValue.content === targetOptionValue.content;
                        break;
                      case 5:
                        isLivedInShoppingCart = false;
                        break;
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
        alert('新增餐點發生錯誤。' + error);
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

    UPDATE_CART_CELL(state) {
      if(state.beUpdatedCartCell)
      {
        state.cart[state.beUpdatedCartCell.cartIndex] = state.beUpdatedCartCell.cartCell;
      }      
    },

    UPDATE_PAGE_STATE(state, { pageState }) {
      state.pageState = pageState;
    },

    UPDATE_BE_UPDATED_CART_CELL(state, { cartCell }) {
      state.beUpdatedCartCell = cartCell;
    },

    UPDATE_TEMP_COMBO(state, { tempCombo }) {
      state.tempCombo = tempCombo;
    },

    UPDATE_TEMP_COMBO_DISH_DETAIL_KEY(state, { optionIndex, optionValueIndex }) {
      state.tempComboDishDetailKey = { optionIndex, optionValueIndex };
    },    
  },
  actions: {
    addToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },

    updateCartQuantity({ commit }, { dishIndex, quantity }) {
      commit('UPDATE_CART_QUANTITY', { dishIndex, quantity });
    },

    updateCartCell({ commit }) {
      commit('UPDATE_CART_CELL');
    },

    updatePageState({ commit }, { pageState }) {
      commit('UPDATE_PAGE_STATE', { pageState });
    },

    updateBeUpdatedCartCell({ commit }, { cartCell }) {
      commit('UPDATE_BE_UPDATED_CART_CELL', { cartCell });
    },

    updateTempCombo({ commit }, { tempCombo }) {
      commit('UPDATE_TEMP_COMBO', { tempCombo });
    },

    updateTempComboDishDetailKey({ commit }, { optionIndex, optionValueIndex }) {
      commit('UPDATE_TEMP_COMBO_DISH_DETAIL_KEY', { optionIndex, optionValueIndex });
    },
  },
  getters: {
    cart: state => state.cart,
    pageState: state => state.pageState,
    beUpdatedCartCell: state => state.beUpdatedCartCell,
    tempCombo: state => state.tempCombo,
    tempComboDishDetailKey: state => state.tempComboDishDetailKey
  }
});