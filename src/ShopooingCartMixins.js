export const shoppingCartMixin = {
    methods: {
        getDishPrice(dish){
            var product = dish.product;
            let result = product.price;
            if(product.Options){
                product.Options.forEach((option) => {
                    option.OptionVaules.forEach((optionVaule) => {
                        switch(option.Type) {
                        case 1:
                        case 2:
                            if(optionVaule.BeChoise)
                                result += optionVaule.Price;
                            break;
                        case 3:
                            if(optionVaule.Content)
                                result += optionVaule.Price;
                            break;
                        case 4:
                            if(parseInt(optionVaule.Content) > 0)
                                result += parseInt(optionVaule.Content) * optionVaule.Content;  
                            break;
                        }
                    });
                });
            }

            return result * dish.quantity;
        },
        getLittlePrice(cart){
            let result = 0;
            cart.forEach((dish) => {
                result += this.getDishPrice(dish);
            });
            return result;
        },
        getServicePrice(cart){
            return this.getLittlePrice(cart) * 0.1;
        },
        getTotalPrice(cart){
            return this.getLittlePrice(cart) + this.getServicePrice(cart);
        },
    }
  }