// module2-arrays-tuples.ts

// -------------------- Arrays --------------------

// Array of numbers
let numbers: number[] = [10, 20, 30, 40];
console.log("Numbers Array:", numbers);

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits Array:", fruits);

// Generic array type
let mixed: Array<string | number> = ["Sony", 100, "TS", 200];
console.log("Mixed Array:", mixed);

// -------------------- Tuples --------------------

// Fixed length & fixed type order
let person: [string, number, boolean] = ["John", 25, true];
console.log("Person Tuple:", person);

// Tuple with labels (for readability)
let user: [id: number, name: string, active: boolean] = [101, "Alice", true];
console.log("User Tuple:", user);

// Tuple with optional elements
let employee: [string, number?] = ["Bob"];
console.log("Employee Tuple (optional):", employee);

// Tuple with rest elements
let colors: [string, ...string[]] = ["Primary", "Red", "Blue", "Green"];
console.log("Colors Tuple with Rest:", colors);
