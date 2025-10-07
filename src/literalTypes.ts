// 📘 literalTypes.ts
// Demonstration of Literal Types in TypeScript

// ✅ Example 1: String Literal Types
let direction: "up" | "down" | "left" | "right";

direction = "up";      // ✅ Valid
// direction = "forward"; // ❌ Error: not part of the allowed literals

console.log("Direction:", direction);

// ✅ Example 2: Numeric Literal Types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // ✅ Valid
console.log("Dice roll:", diceRoll);

// ✅ Example 3: Boolean Literal Types
type YesOrNo = "yes" | "no";
let userResponse: YesOrNo = "yes";
console.log("User Response:", userResponse);

// ✅ Example 4: Using Literal Types in Function Parameters
function move(direction: "up" | "down" | "left" | "right") {
  console.log(`Moving ${direction} ⬆⬇⬅➡`);
}

move("left"); // ✅ Works fine
// move("forward"); // ❌ Invalid

// ✅ Example 5: Combining Literal Types with Objects
type Status = "pending" | "approved" | "rejected";

interface ShopOrder {
  id: number;
  item: string;
  status: Status;
}

const order: ShopOrder = { id: 101, item: "Coffee Mug", status: "approved" };
console.log(`Order #${order.id} is ${order.status}`);
