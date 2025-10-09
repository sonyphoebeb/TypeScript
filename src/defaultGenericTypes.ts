// Default generic type is 'string'
function displayValue<T = string>(value: T): void {
    console.log("🔹 Value:", value);
  }
  
  // Usage
  displayValue("Hello TypeScript"); // ✅ T inferred as string
  displayValue<number>(100);        // ✅ Explicitly specify number

  