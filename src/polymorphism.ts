// Polymorphism Examples

// ✅ Overloading (Compile time)
function calculate(a: number, b: number): number;
function calculate(a: string, b: string): string;
function calculate(a: any, b: any): any {
  return a + b;
}
console.log(calculate(5, 10));   // 15
console.log(calculate("Hello ", "TS")); // Hello TS

// ✅ Overriding (Runtime Polymorphism)
class Shape {
  area(): void {
    console.log("Calculating area...");
  }
}
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  override area(): void {
    console.log("Circle area:", Math.PI * this.radius * this.radius);
  }
}
const c = new Circle(5);
c.area();

// ✅ Generics Example
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(42));
console.log(identity<string>("TypeScript"));

// ✅ Compile-time vs Runtime Polymorphism
// Compile-time → Function Overloading
// Runtime → Method Overriding
