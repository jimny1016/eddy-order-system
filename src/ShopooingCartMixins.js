export const shoppingCartMixin = {
    methods: {
        getDishPrice(dish){
            var product = dish.product;
            let result = product.price;
            if(product.Options){
                result += this.getOptionsPrice(product.Options);
            }

            return result * dish.quantity;
        },
        getOptionsPrice(options){
            let result = 0;
            options.forEach((option) => {
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
            return result;
        },
        getLittlePrice(cart){
            let result = 0;
            cart.forEach((dish) => {
                result += this.getDishPrice(dish);
            });
            return Math.ceil(result);
        },
        getServicePrice(cart){
            return Math.ceil(this.getLittlePrice(cart) * 0.1);
        },
        getSavePrice(cart){
            return Math.ceil(this.getLittlePrice(cart) * 0.2);
        },
        getTotalPrice(cart){
            return Math.ceil(this.getLittlePrice(cart) + this.getServicePrice(cart) - this.getSavePrice(cart));
        },
    }
  }