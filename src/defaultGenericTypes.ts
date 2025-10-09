// Default generic type is 'string'
function displayValue<T = string>(value: T): void {
    console.log("🔹 Value:", value);
  }
  
  // Usage
  displayValue("Hello TypeScript"); // ✅ T inferred as string
  displayValue<number>(100);        // ✅ Explicitly specify number

  class ApiResponse<T = string> {
    constructor(public status: number, public data: T) {}
  }
  
  // Usage
  const textResponse = new ApiResponse(200, "Success!"); // T defaults to string
  const jsonResponse = new ApiResponse<{ id: number; name: string }>(200, { id: 1, name: "Sony" });
  
  console.log("📄 Text Response:", textResponse);
  console.log("📦 JSON Response:", jsonResponse);
  
  