// module2-specialTypes.ts

// 1. any type (can hold any value, disables type checking)
let randomValue: any = 10;
randomValue = "Hello";   // allowed
randomValue = true;      // allowed
console.log("any example:", randomValue);

// 2. unknown type (safer alternative to any)
let inputValue: unknown = "TypeScript";
if (typeof inputValue === "string") {
    console.log("unknown example:", inputValue.toUpperCase()); 
}

// 3. never type (function that never returns)
function throwError(message: string): never {
    throw new Error(message);
}

// Example of never in infinite loop
function infiniteLoop(): never {
    while (true) {
        console.log("Looping forever...");
    }
}
