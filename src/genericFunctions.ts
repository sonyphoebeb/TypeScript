// Generic Function Example
function genericIdentity<T>(value: T): T {
    return value;
  }
  
  // Usage
  console.log(genericIdentity<string>("Hello TypeScript"));
  console.log(genericIdentity<number>(42));
  console.log(genericIdentity<boolean>(true));
  