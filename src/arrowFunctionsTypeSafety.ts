// Module 3 – Functions in TypeScript
// 5. Arrow Functions & Type Safety

// ✅ Basic arrow function with explicit typing
const add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(10, 20)); // 30

// ✅ Arrow function with inferred return type
const multiply = (x: number, y: number) => x * y;
console.log(multiply(5, 6)); // 30

// ✅ Arrow function with union types
const formatValue = (value: string | number): string => {
    if (typeof value === "string") {
        return `String: ${value.toUpperCase()}`;
    }
    return `Number: ${value.toFixed(2)}`;
};
console.log(formatValue("typescript")); // String: TYPESCRIPT
console.log(formatValue(99.456));       // Number: 99.46

// ✅ Arrow function returning void
const logMessage = (msg: string): void => {
    console.log("Log:", msg);
};
logMessage("Hello TS!");

// ✅ Arrow function with array methods
const numbers1: number[] = [1, 2, 3, 4, 5];
const doubled = numbers1.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ✅ Arrow function with object return
type User1 = { id: number; name: string };

const createUser1 = (id: number, name: string): User1 => ({
    id,
    name
});

console.log(createUser1(1, "Sony"));
