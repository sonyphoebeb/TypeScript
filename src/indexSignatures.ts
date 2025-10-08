// 5_indexSignatures.ts
// --------------------------------------
// 🎯 Index Signatures in TypeScript
// --------------------------------------

// ✅ Example 1: Basic index signature
type UserScores = {
    [username: string]: number;
  };
  
  const scores: UserScores = {
    John: 95,
    Mary: 88,
    David: 76,
  };
  
  console.log("Mary's Score:", scores["Mary"]);
  
  
  // ✅ Example 2: Using with interface
  interface EmployeeDirectory {
    [employeeId: string]: string;
  }
  
  const employees: EmployeeDirectory = {
    E101: "Alice",
    E102: "Bob",
    E103: "Charlie",
  };
  
  console.log("Employee E102:", employees["E102"]);
  
  
  // ✅ Example 3: Number as key
  interface ProductInventory {
    [productId: number]: string;
  }
  
  const products: ProductInventory = {
    101: "Laptop",
    102: "Headphones",
    103: "Keyboard",
  };
  
  console.log("Product 101:", products[101]);
  
  
  // ✅ Example 4: Combining fixed & dynamic keys
  interface Settings {
    theme: string;
    [key: string]: string; // allows any extra string property
  }
  
  const userSettings: Settings = {
    theme: "dark",
    fontSize: "16px",
    language: "en",
  };
  
  console.log("Theme:", userSettings.theme);
  console.log("Language:", userSettings["language"]);
  
  
  // ✅ Example 5: Mixed types with index signature
  interface Config {
    [key: string]: string | number;
    version: number;
  }
  
  const appConfig: Config = {
    version: 1.2,
    appName: "MyApp",
    authorId: 101
  };
  
  console.log("App Config:", appConfig);
  
  
  // ✅ Example 6 (Real-world use case):
  // Dynamic API Field Mapping
  interface ApiFieldMapping {
    [apiField: string]: string;
  }
  
  const userApiMapping: ApiFieldMapping = {
    user_id: "S10",
    user_name: "sony",
    user_email: "sony@gmail.com",
  };
  
  console.log("API Field Mapping:", userApiMapping);
  