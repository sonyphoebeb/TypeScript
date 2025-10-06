
type CreditCardPayment1 = {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  
  type UpiPayment1 = {
    upiId: string;
    linkedBank: string;
  };
  
  // ✅ Custom Type Guards
  function isCreditCardPayment(payment: any): payment is CreditCardPayment1 {
    return "cardNumber" in payment && "cvv" in payment;
  }
  
  function isUpiPayment(payment: any): payment is UpiPayment1 {
    return "upiId" in payment && "linkedBank" in payment;
  }
  
  // ✅ Function using type guards
  function processPayment(payment: CreditCardPayment1 | UpiPayment1) {
    if (isCreditCardPayment(payment)) {
      console.log(`💳 Processing Credit Card Payment for card: ${payment.cardNumber}`);
    } else if (isUpiPayment(payment)) {
      console.log(`📱 Processing UPI Payment via ${payment.upiId}`);
    } else {
      console.log("❌ Unknown payment type");
    }
  }
  
  // ✅ Test Data
  const cardPayment: CreditCardPayment1 = {
    cardNumber: "1234-5678-9999",
    expiryDate: "12/28",
    cvv: "123",
  };
  
  const upiPayment: UpiPayment1 = {
    upiId: "sony@upi",
    linkedBank: "HDFC Bank",
  };
  
  // ✅ Function Calls
  processPayment(cardPayment);
  processPayment(upiPayment);
  