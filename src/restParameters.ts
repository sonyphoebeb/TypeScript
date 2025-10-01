// Module 3 – Functions in TypeScript
// 3. Rest Parameters

// A function that takes any number of numbers and adds them
function addNumbers(...nums: number[]): number {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(addNumbers(10, 20));            // 30
console.log(addNumbers(5, 10, 15, 20, 25)); // 75

// A function with mixed parameters and rest
function introduce(firstName: string, ...hobbies: string[]): string {
    return `${firstName}'s hobbies are: ${hobbies.join(", ")}`;
}

console.log(introduce("Sony", "Coding", "Gaming", "Traveling"));
