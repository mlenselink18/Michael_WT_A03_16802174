"use strict";


$(document).ready( () => {

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ ;
    const positiveNum = /^([0-9]*|\d*\.\d{1}?\d*)$/;
    const  us =  new  Intl.NumberFormat( "en-US" , {style:  "currency" , currency:  "USD" });

    const  calculateDiscount = input  =>  {
        let  discount =  1;
        let type = $("#discountType").val();

        switch (type)
        {
            case ("0"):
                break;
            case ("1"):
                discount = .9;
                break;
            case ("2"):
                discount = .9;
                break;
            case ("3"):
                discount = .85;
                break;
            default:
                break;
        }
        
        return (input > 0 ? input * discount : input);
    };

    const  checkIfExists = input  =>  {
        let exists = true;
        if(input.trim() == "")
        {
            exists = false;
        }

        return exists;
    };

    const  checkIfValidDate = input  =>  {
        let valid = true;
        if ( !  / ^ [01] ? \d\/[0-3]\d\/\d {4} $ / .test(text) ) { 
            valid = false ; 
            }

        return valid;
    };

    $( function() {
        $( "#purchaseDate" ).datepicker({ minDate:-20, maxDate: 0, showOtherMonths: true, selectOtherMonths: true });
    });

    $("#buttonSubmit").click( evt => {

        let isValid = true;
        //let record = new record();

        var mail = $("#inputEmail").val().trim();
        record.email = mail;
        if(!emailPattern.test(record.email))
        {
            $("#inputEmail").next().text("*");
            isValid = false;
        }
        else
        {
            $("#inputEmail").next().text("");
        }

        record.purchase_amount = $("#purchaseAmount").val().trim();
        if (!checkIfExists(record.purchase_amount))
        {
            $("#purchaseAmount").next().text("*");
            isValid = false;
        }
        else
        {
            $("#purchaseAmount").next().text("");
        }

        record.purchase_date = $("#purchaseDate").val();
        if(!checkIfExists(record.purchase_date))
        {
            $("#purchaseDate").next().text("*");
            isValid = false;
        }
        else
        {
            $("#purchaseDate").next().text("");
        }
        
        if(!isValid && !record.isValid())
        {
            $("#discountedPrice").val("");
            return;
        }
        else
        {
            $("#discountedPrice").val(us.format(record.calculate()));
        }
        return;
        evt.preventDefault();
    });
});