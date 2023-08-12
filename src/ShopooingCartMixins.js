export const shoppingCartMixin = {
    methods: {
        getDishPrice(dish){
            var product = dish.product;
            let result = product.price;
            if(product.options){
                result += this.getOptionsPrice(product.options);
            }

            return result * dish.quantity;
        },
        getOptionsPrice(options){
            let result = 0;
            options.forEach((option) => {
                option.optionVaules.forEach((optionVaule) => {
                    switch(option.type) {
                    case 1:
                    case 2:
                        if(optionVaule.beChoise)
                            result += optionVaule.price;
                        break;
                    case 3:
                        if(optionVaule.content)
                            result += optionVaule.price;
                        break;
                    case 4:
                        if(parseInt(optionVaule.content) > 0)
                            result += parseInt(optionVaule.content) * optionVaule.content;  
                        break;
                    }
                });
            });
            return result;
        },
        getComboPrice(dish){            
            var product = dish.product;
            let result = product.price;
            if(product.options){
                result += this.getOptionsPrice(product.options);
                let filteredOption = product.options.filter(obj => obj.type === 5);
                if(filteredOption){
                    filteredOption.forEach((option) => {
                        let filteredOptionValues = option.optionVaules.filter(obj => obj.beChoise === true);
                        if(filteredOptionValues){
                            filteredOptionValues.forEach((optionVaule) => {
                                result += optionVaule.price;
                                result += this.getOptionsPrice(optionVaule.options);
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