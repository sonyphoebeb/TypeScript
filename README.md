# 13-Sep-2025 (Saturday)

# TypeScript Boilerplate Project

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
