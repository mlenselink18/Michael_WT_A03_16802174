"use strict";

let record = {
    email : '',
    purchase_date : new Date(),
    purchase_amount : 0.0, 
    discount_amount : 0.0, 
    _discounts: [
        {discount_type:  'none' , percent_off:  0 } ,
        {discount_type:  'military' , percent_off:  .10 } ,
        {discount_type:  'student' , percent_off:  .10 } ,
        {discount_type:  'aarp' , percent_off:  .15 } 
    ],
    set discount(value){
        this._discounts.forEach(discount  =>  {
            if (discount.discount_type === value){
                this.discount_amount = discount.percent_off;
            }
        });
    },
    get isValid(){
        if(this.purchase_amount > 0)
            {return true;}
        else
            {return false;}
    },
    calculate(){
        let amount = ((1 - this.discount_amount) * this.purchase_amount);
        return (amount);
    }
}