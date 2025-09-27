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
<h2>27-Sep-2025 (Saturday)</h2>

# 📘 Weekend Practice – 21 Sept 2025
✅ Topics Covered by Trainer
1. Function Overloading

Same function name with multiple signatures.

Example: function calculate() handling both number addition and string concatenation.

2. Arrow Functions

Shorter syntax for functions.

Example:

const add = (a: number, b: number): number => a + b;

3. Higher Order Functions & Callbacks with Types

Functions that take other functions as arguments or return them.

Example:

function operate(a: number, b: number, fn: (x: number, y: number) => number): number {
  return fn(a, b);
}

const sum = (x: number, y: number) => x + y;
console.log(operate(5, 3, sum)); // 8

4. OOPs in TypeScript
🔹 Class and Object

Creating classes and instances using new.

🔹 Access Modifiers

public, private, protected keywords to control access.

🔹 Readonly Property

Properties that cannot be reassigned after initialization.

🔹 Inheritance & Abstract Class

Extending base classes with extends.

Declaring abstract classes & methods for polymorphism.

📌 All examples were implemented in TypeScript and tested with simple input/output practice.
