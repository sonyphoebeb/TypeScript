// =============================
// Module 1 – Introduction & Setup
// =============================

// First TS program
let greeting: string = "Hello, TypeScript 🚀";
console.log(greeting);


// =============================
// Module 2 – Type System Foundations
// =============================

// Basic Types

// string
let username: string = "Sony";
console.log("Username:", username);

// number
let age: number = 25;
console.log("Age:", age);

// boolean
let isOnline: boolean = true;
console.log("Is Online:", isOnline);

// null
let emptyValue: null = null;
console.log("Null value:", emptyValue);

// undefined
let notAssigned: undefined = undefined;
console.log("Undefined value:", notAssigned);


// Practice with all together
function showUserInfo(name: string, userAge: number, online: boolean): string {
    return `👤 User: ${name}, Age: ${userAge}, Online: ${online}`;
}

console.log(showUserInfo(username, age, isOnline));
