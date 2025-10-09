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
  
  interface ServerResponse<T = boolean> {
    success: T;
    message: string;
  }
  
  // ✅ Using default (boolean)
  const res1: ServerResponse = { success: true, message: "Operation completed" };
  
  // ✅ Overriding default
  const res2: ServerResponse<string> = { success: "true", message: "Done" };
  
  console.log("✅ Result 1:", res1);
  console.log("📝 Result 2:", res2);
  