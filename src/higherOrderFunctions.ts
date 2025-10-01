// higherOrderFunctions.ts

// -------------------------
// Example 1 – HOF with callback
// -------------------------
type Callback = (num: number) => number;

function processNumbers(nums: number[], callback: Callback): number[] {
    return nums.map(callback);
}

const double = (n: number): number => n * 2;
const squared = (n: number): number => n * n;

console.log("Process Numbers (Double):", processNumbers([1, 2, 3, 4], double));
console.log("Process Numbers (Squared):", processNumbers([1, 2, 3, 4], squared));


// -------------------------
// Example 2 – HOF returning a function
// -------------------------
function multiplier(factor: number): (n: number) => number {
    return (n: number) => n * factor;
}

const doubleFn = multiplier(2);
const tripleFn = multiplier(3);

console.log("DoubleFn(5):", doubleFn(5));
console.log("TripleFn(5):", tripleFn(5));


// -------------------------
// Example 3 – Callback with multiple params
// -------------------------
function calculate(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

const add1 = (x: number, y: number): number => x + y;
const multiply1 = (x: number, y: number): number => x * y;

console.log("Add:", calculate(10, 5, add1));
console.log("Multiply:", calculate(10, 5, multiply1));
