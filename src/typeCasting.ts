
// 📘 typeCasting.ts
// Demonstrating different use cases of Type Casting in TypeScript

// ✅ Example: Narrowing a Union Type
type OnlineOrder = { paymentMethod: () => void };
type InStoreOrder = { storeLocation: () => void };

let Shopping: OnlineOrder | InStoreOrder = { paymentMethod: () => console.log("Credit Card") };

// Using type casting to tell TS it's a Dog
(Shopping as OnlineOrder).paymentMethod();

// ✅ Example2: Safe casting using 'unknown' first
const data: unknown = "123";
const numericValue = data as string;
console.log("Converted value:", numericValue);
