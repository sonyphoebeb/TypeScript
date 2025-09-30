// ===============================
// 1. Numeric Enum
// ===============================
enum OrderStatus {
    Pending,      // 0
    Shipped,      // 1
    Delivered,    // 2
    Cancelled     // 3
  }
  
  let currentStatus: OrderStatus = OrderStatus.Shipped;
  console.log("Numeric Enum - Order Status:", currentStatus); // Output: 1
  console.log("Enum Name:", OrderStatus[currentStatus]); // Output: Shipped
  
  
  
  // ===============================
  // 2. String Enum
  // ===============================
  enum PaymentMethod {
    CreditCard = "CREDIT",
    DebitCard = "DEBIT",
    UPI = "UPI",
    NetBanking = "NET_BANKING"
  }
  
  let method: PaymentMethod = PaymentMethod.UPI;
  console.log("String Enum - Payment Method:", method); // Output: UPI
  
  
  
  // ===============================
  // 3. Const Enum
  // ===============================
  // Const Enums are inlined at compile time → more performance
  const enum Roles {
    Admin,
    Seller,
    Customer
  }
  
  let userRole: Roles = Roles.Admin;
  console.log("Const Enum - User Role:", userRole); // Output: 0
  