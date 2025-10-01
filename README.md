
# TypeScript Boilerplate Project - 13-Sep-2025 (Saturday)

A clean, modern TypeScript boilerplate project with comprehensive configuration and development tools.

## 🚀 Features

- **TypeScript 5.3+** with strict configuration
- **Node.js** runtime support
- **Development tools** (ts-node, rimraf)
- **Type definitions** for Node.js
- **Source maps** for debugging
- **Declaration files** generation
- **Clean build** process

## 📁 Project Structure

```
├── src/
│   └── index.ts          # Main application entry point
├── dist/                 # Compiled JavaScript output (generated)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the compiled application:
   ```bash
   npm start
   ```

## 📜 Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled application
- `npm run dev` - Run the application in development mode (using ts-node)
- `npm run watch` - Watch for changes and recompile automatically
- `npm run clean` - Remove the dist directory

## 🔧 Development

### Running in Development Mode

For development, you can run the TypeScript files directly without compilation:

```bash
npm run dev
```

This uses `ts-node` to execute TypeScript files directly.

### Watching for Changes

To automatically recompile when files change:

```bash
npm run watch
```

## 📝 TypeScript Configuration

The project uses a strict TypeScript configuration with the following key features:

- **Target**: ES2020
- **Module System**: CommonJS
- **Strict Mode**: Enabled with all strict checks
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for type definitions
- **Out Directory**: `./dist`
- **Root Directory**: `./src`

## 🎯 Example Code

The boilerplate includes a simple example demonstrating:

- TypeScript interfaces
- Classes and methods
- Type safety
- Module exports

## 📦 Dependencies

### Development Dependencies

- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions
- `ts-node` - TypeScript execution for Node.js
- `rimraf` - Cross-platform rm -rf utility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on the repository.

## Topics covered by my trainer:

1. Enums in TypeScript

   -> Numeric Enums

   -> Type Inference

   -> Explicit Typing

   -> Union Types

   -> Intersection Types

2. Type Aliases & Interfaces

   -> Type Aliases for custom types

   -> Interfaces for object structures

   -> MVC (Model-View-Controller) basics

3. Function Types

   -> Declaring function signatures

   -> Assigning types to functions

# 14-Sep-2025 (Sunday)

Topics covered by my trainer:

1. User & Role Assignment

   -> Using Enums for role definitions

   -> Type Aliases and Interfaces for user data

   -> Custom (User-Defined) Data Types

2. Functions (Advanced)

   -> Optional parameters

   -> Default parameters

   -> Rest parameters

   -> Function overloading

   -> Arrow functions

   -> Type safety in functions


<br>

# 📘 Weekend Class – 27 Sept 2025 (Saturday)

<h2>✅ Topics Covered by Trainer</h2>

<h2>1. Function Overloading</h2> 

Function overloading in TypeScript allows you to define multiple function signatures for the same function.

Helps to handle different input types with a single function name.

Compiler checks which overload signature matches during compilation.

Example:

    function greet(name: string): string;
    function greet(age: number): string;
    function greet(value: any): string {
    if (typeof value === "string") {
    return `Hello, ${value}`;
    } else {
    return `You are ${value} years old.`;
     }
    }

    console.log(greet("Sony")); // Hello, Sony
    console.log(greet(25));     // You are 25 years old.

<h2> 2. Arrow Functions </h2>

Arrow functions provide a shorter syntax and also lexically bind this.

Used for cleaner code.

Best suited for callbacks and inline functions.

Example:

    const multiply = (x: number, y: number): number => x * y;
    console.log(multiply(4, 5)); // 20

<h2> 3. Higher Order Functions & Callbacks with Types </h2>

Higher Order Function (HOF): A function that takes another function as an argument or returns a function.

Callback: A function passed into another function to be executed later.

TypeScript helps enforce strict typing for callbacks.

Example:

    function operate(
    a: number,
    b: number,
    callback: (x: number, y: number) => number
    ): number {
    return callback(a, b);
    }

    const add = (x: number, y: number) => x + y;
    const sub = (x: number, y: number) => x - y;

    console.log(operate(10, 5, add)); // 15
    console.log(operate(10, 5, sub)); // 5

<h2> 4. OOPs in TypeScript </h2>

🔹 Class and Object

Classes are blueprints for creating objects.

    class Laptop {
     brand: string;
    constructor(brand: string) {
    this.brand = brand;
    }
    }
    let dell = new Laptop("Dell");
    console.log(dell.brand);

🔹 Access Modifiers

public → accessible everywhere.

private → accessible only within the class.

protected → accessible within the class and subclasses.

     class Account {
     private balance: number = 1000;
     public getBalance() {
    return this.balance;
    }
    }
    let acc = new Account();
    console.log(acc.getBalance()); // 1000

🔹 Readonly Property

Once assigned, cannot be reassigned.

     class Student {
     readonly rollNo: number;
    constructor(rollNo: number) {
    this.rollNo = rollNo;
    }
    }

🔹 Inheritance & Abstract Class

Inheritance uses extends.

Abstract classes cannot be instantiated directly, they serve as a base class.

    abstract class Shape {
    abstract area(): number;
    }

    class Circle extends Shape {
    constructor(private radius: number) { super(); }
    area(): number {
    return Math.PI * this.radius * this.radius;
    }
    }
    let c = new Circle(5);
    console.log(c.area()); // 78.5

✅ Summary:

-> Practiced advanced TypeScript concepts like overloading, arrow functions, higher-order functions with callbacks.

-> Explored OOPs fundamentals: class/object, access modifiers, readonly, inheritance, and abstract classes.

-> Clear understanding of type safety while working with modern TypeScript.


<br>

# Type System Foundations - 29-Sep-2025 (Monday)

This repo contains all my TypeScript practice code since the start of Module 1.  
Classes are conducted only on weekends, and I update my learning here after each session. 🚀  

<h2> ✅ Topics Covered </h2> 

<h2> 📍 Module 1 – Introduction & Setup </h2> 
 
1. Why TypeScript?
   - Superset of JavaScript with static typing.
   - Better tooling, maintainability, and developer productivity.
     
2. Setting up the Environment
   - Installed Node.js & TypeScript (`npm install -g typescript`).
   - Configured `tsc` and ran first programs.
     
3. First TS Program
   - Transpiling `.ts` → `.js` using `tsc filename.ts`.
   - Running with `node filename.js`.

<h2> 📍 Module 2 – Type System Foundations </h2> 

<h2> 1. Basic Types </h2> 

- string, number, boolean, null, undefined
  
- Example:
  ```ts
  let firstName: string = "Sony";
  let age: number = 25;
  let isActive: boolean = true;
  let nothing: null = null;
  let notAssigned: undefined = undefined;
  
<h2> 2. Special Types </h2>

any → disables type checking.

unknown → safer than any, needs type checks.

never → functions that never return.

    function throwError(msg: string): never {
    throw new Error(msg);
    }
    
<h2> 3. Arrays </h2> 
   
Declaring arrays:

    let nums: number[] = [1, 2, 3];
    let names: Array<string> = ["Alice", "Bob"];
    
<h2> 4. Tuples </h2> 

Fixed-length, strict order collections:

    let person: [string, number] = ["John", 30];
    let employee: [string, number?] = ["Sony"]; // optional element
    let colors: [string, ...string[]] = ["Primary", "Red", "Blue"];
    
<h2> 📂 Files Created </h2> 

intro.ts → Why TypeScript, setup, first program.

basicTypes.ts → string, number, boolean, null, undefined.

specialTypes.ts → any, unknown, never.

arrays-tuples.ts → arrays and tuples practice.

<h2> 🚀 Next Steps </h2> 

Continue Module 2 with Functions & Object Types.

Explore practical projects using tuples and arrays in APIs.


<br>

# Type System Foundations - 30-Sep-2025 (Tuesday)

This update covers Enums, Type Inference, Union & Intersection Types, and Type Aliases vs Interfaces.

<h2> 🔢 Enums (Numeric, String, Const) </h2> 

Enums are used to define a set of named constants.

// Numeric Enum

    enum Direction {
     Up = 1,
     Down,
     Left,
     Right
    }
    console.log(Direction.Up); // 1

// String Enum

    enum Roles {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
    }
    console.log(Roles.Admin); // "ADMIN"

// Const Enum (compiled as inline values)

    const enum Status {
    Success,
    Failure
    }
    let s: Status = Status.Success;
    console.log(s); // 0

<h2> ✍️ Type Inference & Type Annotations </h2> 

Type Inference → TS figures out the type automatically.

Type Annotations → You explicitly declare the type.

// Type inference

    let message = "Hello TS";  // inferred as string

// Type annotation

    let count: number = 100;

// Function annotation

    function add(a: number, b: number): number {
    return a + b;
    }

<h2> 🔗 Union & Intersection Types </h2> 

Union (|) → One type OR another.

Intersection (&) → Combines multiple types.

// Union Example

    let id: string | number;
    id = 101;
    id = "ORD-2025";

// Intersection Example

    type Person = { name: string };
    type Employee = { role: string };

    type Staff = Person & Employee;

    let staff1: Staff = { name: "Sony", role: "Developer" };

<h2> 🆚 Type Aliases vs Interfaces </h2> 

Both are used to define custom types, but they differ in flexibility.

// Type Alias

    type UserAlias = {
    id: number;
    name: string;
    email?: string;
    };

// Interface

    interface UserInterface {
    id: number;
    name: string;
    email?: string;
    }

// Extending

    interface Employee extends UserInterface {
    role: string;
    }
 
    type Admin = UserAlias & { permissions: string[] };


✅ Type Alias: Can represent primitives, unions, intersections.

✅ Interface: Better for objects & extending class contracts.

<h2> 📌 Summary </h2> 

Enums: Organize constants.

Inference vs Annotations: TS can guess types, but you can declare explicitly.

Union & Intersection: Powerful type combinations.

Type Aliases vs Interfaces: Both structure data, but use aliases for flexibility and interfaces for contracts.

👉 Next: We’ll move into functions, access modifiers, OOP concepts in TypeScript.


<br>

# Functions in TypeScript - 01-Oct-2025 (Wednesday)

This module covers different ways of working with functions in TypeScript, focusing on type safety, flexibility, and reusability.

<h2> 🔹 1. Function Typing (parameters, return type) </h2>

Functions in TypeScript can explicitly define the types of parameters and the return type.

     function add(a: number, b: number): number {
    return a + b;
    }

>h2> 🔹 2. Optional & Default Parameters </h2>

Parameters can be optional (?) or have default values.

    function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
    }

    function multiply(a: number, b: number = 2): number {
    return a * b;
    }

<h2>🔹 3. Rest Parameters </h2>

Use ... to accept multiple arguments.

    function sumAll(...nums: number[]): number {
    return nums.reduce((acc, n) => acc + n, 0);
    }

<h2> 🔹 4. Function Overloading </h2>

Functions can have multiple type signatures.

    function combine(a: string, b: string): string;
    function combine(a: number, b: number): number;
    function combine(a: any, b: any): any {
    return a + b;
    }

    console.log(combine(10, 20));   // 30
    console.log(combine("Hi ", "TS")); // "Hi TS"

<h2> 🔹 5. Arrow Functions & Type Safety </h2>

Arrow functions provide concise syntax and preserve this context.

    const numbers: number[] = [1, 2, 3];
    const squared: number[] = numbers.map((n: number): number => n * n);

    type User = { id: number; name: string };
    const createUser = (id: number, name: string): User => ({ id, name });

<h2> 🔹 6. Higher-order Functions & Callbacks with Types </h2>

Functions can accept other functions as arguments or return functions.

    function processNumbers(nums: number[], callback: (n: number) => number): number[] {
    return nums.map(callback);
    }

    const doubled = processNumbers([1, 2, 3], (n) => n * 2);

<h2> ✅ Key Takeaways </h2>

-> TypeScript enforces strong typing in functions.

-> Supports optional, default, and rest parameters for flexibility.

-> Overloading allows different behaviors with type safety.

-> Arrow functions make code shorter and keep this scoped correctly.

-> Higher-order functions and callbacks improve reusability.








