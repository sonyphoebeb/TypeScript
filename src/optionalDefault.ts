// Module 3 – Functions in TypeScript
// 2. Optional & Default Parameters

// Optional parameter (lastName? may or may not be provided)
function greet(firstName: string, lastName?: string): string {
    if (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    }
    return `Hello, ${firstName}`;
}

console.log(greet("Sony"));
console.log(greet("Sony", "Kumar"));

// Default parameter (role will be 'User' if not passed)
function createUser(name: string, role: string = "User"): string {
    return `Created user: ${name}, Role: ${role}`;
}

console.log(createUser("Sony"));          // role defaults to "User"
console.log(createUser("Sony", "Admin")); // role provided as "Admin"
