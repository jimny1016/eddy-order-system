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
        getComboPrice(dish){            
            var product = dish.product;
            let result = product.price;
            if(product.Options){
                result += this.getOptionsPrice(product.Options);
                let filteredOption = product.Options.filter(obj => obj.Type === 5);
                if(filteredOption){
                    filteredOption.forEach((option) => {
                        let filteredOptionValues = option.OptionVaules.filter(obj => obj.BeChoise === true);
                        if(filteredOptionValues){
                            filteredOptionValues.forEach((optionVaule) => {
                                result += optionVaule.price;
                                result += this.getOptionsPrice(optionVaule.Options);
                            });
                        }
                    });
                }
            }
            return result;
        },
        getLittlePrice(cart){
            let result = 0;
            cart.forEach((dish) => {
                if(dish.product.isCombo){
                    result += this.getComboPrice(dish);
                }                
                else{
                    result += this.getDishPrice(dish);
                }                
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