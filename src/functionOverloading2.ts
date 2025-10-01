// Module 3 – Functions in TypeScript
// 4. Function Overloading

// Function overload signatures
function format(input: string): string;
function format(input: number): string;

// Implementation
function format(input: string | number): string {
    if (typeof input === "string") {
        return `Formatted string: ${input.toUpperCase()}`;
    } else {
        return `Formatted number: ${input.toFixed(2)}`;
    }
}

// Usage
console.log(format("typescript")); // Formatted string: TYPESCRIPT
console.log(format(123.456));      // Formatted number: 123.46
// console.log(format(true)); // ❌ Error: No overload matches this call


// Another example: Overloaded greet function
function greet(name: string): string;
function greet(age: number): string;

function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old.`;
    }
}

console.log(greet("Sony"));  // Hello, Sony!
console.log(greet(25));      // You are 25 years old.
