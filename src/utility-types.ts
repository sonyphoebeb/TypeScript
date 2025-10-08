// 🧩 Module 5 – Advanced Types
// 6. Utility Types in TypeScript
// ---------------------------------------------

// ✅ Base Interface
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // ------------------------------------------------------
  // 1️⃣ Partial<T> → Makes all properties optional
  // ------------------------------------------------------
  function updateUser(user: Partial<User>): void {
    console.log("🔹 Updating user:", user);
  }
  
  updateUser({ name: "Sony" }); // Only name is provided
  
  // ------------------------------------------------------
  // 2️⃣ Pick<T, K> → Select specific properties
  // ------------------------------------------------------
  type UserBasicInfo = Pick<User, "id" | "name">;
  
  const basicUser: UserBasicInfo = {
    id: 1,
    name: "Sony",
  };
  
  console.log("🔸 Pick Example:", basicUser);
  
  // ------------------------------------------------------
  // 3️⃣ Omit<T, K> → Remove certain properties
  // ------------------------------------------------------
  type UserWithoutEmail = Omit<User, "email">;
  
  const userWithoutEmail: UserWithoutEmail = {
    id: 2,
    name: "Alex",
  };
  
  console.log("🔸 Omit Example:", userWithoutEmail);
  
  // ------------------------------------------------------
  // 4️⃣ Record<K, T> → Create key-value mapping
  // ------------------------------------------------------
  type ScoreCard = Record<string, number>;
  
  const scores: ScoreCard = {
    Sony: 85,
    Alex: 92,
    Mia: 78,
  };
  
  console.log("🔸 Record Example:", scores);
  
  // ------------------------------------------------------
  // 5️⃣ Readonly<T> → Makes all properties immutable
  // ------------------------------------------------------
  const userReadOnly: Readonly<User> = {
    id: 3,
    name: "Mia",
    email: "mia@example.com",
  };
  
  // userReadOnly.name = "Changed"; ❌ Error: Cannot assign to 'name' because it is a read-only property.
  
  console.log("🔸 Readonly Example:", userReadOnly);
  
  // ------------------------------------------------------
  // ✅ Combined Example – Product Interface
  // ------------------------------------------------------
  interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  type ProductPreview = Pick<Product, "name" | "price">;
  type ProductEdit = Partial<Product>;
  type ProductMap = Record<string, Product>;
  type ReadOnlyProduct = Readonly<Product>;
  type ProductWithoutCategory = Omit<Product, "category">;
  
  const sampleProduct: ProductPreview = { name: "Headphones", price: 2999 };
  const editableProduct: ProductEdit = { id: 1, price: 3499 };
  const inventory: ProductMap = {
    P001: { id: 1, name: "Laptop", price: 59999, category: "Electronics" },
  };
  const fixedProduct: ReadOnlyProduct = { id: 2, name: "Mouse", price: 999, category: "Accessories" };
  const categoryRemoved: ProductWithoutCategory = { id: 3, name: "Bag", price: 1999 };
  
  console.log("✅ Combined Examples:");
  console.log("Preview:", sampleProduct);
  console.log("Editable:", editableProduct);
  console.log("Inventory:", inventory);
  console.log("Readonly:", fixedProduct);
  console.log("Omit:", categoryRemoved);
  