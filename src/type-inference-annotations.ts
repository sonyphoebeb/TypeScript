// ===============================
// 1. Type Inference
// ===============================
// TS automatically infers the type based on value
let productName = "Laptop"; // inferred as string
let productPrice = 50000;   // inferred as number
let inStock = true;         // inferred as boolean

console.log("Product:", productName, "Price:", productPrice, "In Stock:", inStock);

// productName = 123; ❌ Error (TypeScript infers 'string')



// ===============================
// 2. Type Annotations
// ===============================
// Explicitly declare type
let customerName: string = "Alice";
let customerAge: number = 28;
let isPrimeMember: boolean = false;

console.log("Customer:", customerName, "Age:", customerAge, "Prime Member:", isPrimeMember);



// ===============================
// 3. Function with Inference
// ===============================
function calculateDiscount(price: number, discount: number) {
  return price - (price * discount / 100); 
  // return type inferred as number
}

let finalPrice = calculateDiscount(1000, 10);
console.log("Final Price (Inference):", finalPrice);



// ===============================
// 4. Function with Annotations
// ===============================
function greetCustomer(name: string): string {
  return `Welcome, ${name}!`;
}

console.log(greetCustomer("Bob"));



// ===============================
// 5. Real-time Example
// ===============================
// Shopping Cart
let cartItems: string[] = ["Shoes", "Watch", "Shirt"]; // inferred as string[]
let totalAmount: number = 3000; // annotated as number

console.log("Cart:", cartItems, "Total:", totalAmount);
