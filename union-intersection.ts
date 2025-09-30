// ===============================
// 1. Union Types ( | )
// ===============================
// A variable can hold more than one type
let orderId: string | number;

orderId = 101;        // ✅ number allowed
console.log("Order ID (number):", orderId);

orderId = "ORD102";   // ✅ string allowed
console.log("Order ID (string):", orderId);

// orderId = true;    // ❌ Error (only string or number allowed)



// ===============================
// 2. Union in Functions
// ===============================
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("Your ID (string):", id.toUpperCase());
  } else {
    console.log("Your ID (number):", id.toFixed(2));
  }
}

printId("user123");
printId(98765);



// ===============================
// 3. Intersection Types ( & )
// ===============================
// Combine multiple types into one

type Address = {
  city: string;
  zip: number;
};

type Contact = {
  phone: string;
  email: string;
};

// Intersection -> must have all properties of both
type CustomerDetails = Address & Contact;

let customer: CustomerDetails = {
  city: "Hyderabad",
  zip: 500001,
  phone: "9876543210",
  email: "customer@example.com"
};

console.log("Customer Details:", customer);



// ===============================
// 4. Real-time Example
// ===============================
// Union -> product can be digital or physical
type DigitalProduct = {
  fileSize: string;
};

type PhysicalProduct = {
  weight: string;
};

type Product = DigitalProduct | PhysicalProduct;

let ebook: Product = { fileSize: "5MB" };
let laptop: Product = { weight: "2kg" };

console.log("Ebook:", ebook);
console.log("Laptop:", laptop);

// Intersection -> special product with both
type PremiumProduct = DigitalProduct & PhysicalProduct;

let specialBundle: PremiumProduct = {
  fileSize: "20GB",
  weight: "3kg"
};

console.log("Special Bundle:", specialBundle);
