// ===============================
// 1. Type Aliases
// ===============================
// Define custom names for types
type OrderID = string | number;

let order1: OrderID = 101;
let order2: OrderID = "ORD-2025";

console.log("Order IDs:", order1, order2);

// Type alias with object
type UserAlias = {
  id: number;
  name: string;
  email?: string; // optional
};

let user1: UserAlias = {
  id: 1,
  name: "Sony"
};

console.log("User Alias:", user1);



// ===============================
// 2. Interfaces
// ===============================
// More suited for object structures
interface UserInterface {
  id: number;
  name: string;
  email?: string; // optional
}

let user2: UserInterface = {
  id: 2,
  name: "Trainer",
  email: "trainer@example.com"
};

console.log("User Interface:", user2);



// ===============================
// 3. Extending / Reusing
// ===============================
// Interface supports extends
interface Employee extends UserInterface {
  role: string;
}

let emp: Employee = {
  id: 3,
  name: "John",
  role: "Developer"
};

console.log("Employee:", emp);

// Type alias supports intersections
type Admin = UserAlias & {
  permissions: string[];
};

let admin: Admin = {
  id: 4,
  name: "Alice",
  permissions: ["READ", "WRITE", "DELETE"]
};

console.log("Admin:", admin);



// ===============================
// 4. Real-time Example
// ===============================
// Using Interface for API Response
interface ApiResponse {
  status: number;
  message: string;
}

// Using Type Alias for flexible result type
type ApiResult = ApiResponse | null;

let response1: ApiResult = {
  status: 200,
  message: "Success"
};

let response2: ApiResult = null;

console.log("API Responses:", response1, response2);
