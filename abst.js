class Payment{
     constructor(){
        if(new.target===Payment){
             throw new Error("Cannot create Payment directly!");
        }
     }
     pay(amount){
        throw new Error("pay() must be implemented by subclass");
     }    
}
class CreditCardPayment extends Payment{
    pay(amount){
        console.log(`paid $${amount} using credit card`);
    }

}
class PayPalPayment extends Payment{
    pay(amount){
        console.log(`paid $${amount} using paypal`);
    }
}
class UPIPayment extends Payment{
    pay(amount){
        console.log(`paid $${amount} using upi`);
    }
}
function ProcessPayment( paymentmethod, amount){
 paymentmethod.pay(amount); 
}
ProcessPayment(new CreditCardPayment(), 2000);
ProcessPayment(new PayPalPayment(), 500);
ProcessPayment(new UPIPayment(), 3000);