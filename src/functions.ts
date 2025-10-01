// Module 3 – Functions in TypeScript
// 1. Function typing (parameters, return type)

// Explicit parameter types and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", addNumbers(10, 20));

// Function with string params and return type
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greetUser("Sony"));

// Function with boolean return type
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log("Is 10 even? ", isEven(10));
console.log("Is 7 even? ", isEven(7));
