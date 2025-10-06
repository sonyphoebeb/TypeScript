class Payment {
    constructor(public amount: number) {}
  }
  
  class CreditCardPayment extends Payment {
    constructor(amount: number, public cardNumber: string) {
      super(amount);
    }
  
    process() {
      console.log(`Processing credit card payment of ₹${this.amount} from card ${this.cardNumber}`);
    }
  }
  
  class UpiPayment extends Payment {
    constructor(amount: number, public upiId: string) {
      super(amount);
    }
  
    process() {
      console.log(`Processing UPI payment of ₹${this.amount} from ${this.upiId}`);
    }
  }
  
  function handlePayment(payment: Payment) {
    if (payment instanceof CreditCardPayment) {
      payment.process();
    } else if (payment instanceof UpiPayment) {
      payment.process();
    } else {
      console.log("Unknown payment type");
    }
  }
  
  const payment1 = new CreditCardPayment(1200, "1234-5678-9012");
  const payment2 = new UpiPayment(500, "sony@upi");
  
  handlePayment(payment1);
  handlePayment(payment2);
  