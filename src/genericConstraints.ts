// Define a constraint type
interface HasLength {
    length: number;
  }
  
  // Constrain T to types that have a 'length' property
  function logLength<T extends HasLength>(item: T): void {
    console.log("📏 Length:", item.length);
  }
  
  // Works ✅
  logLength("Hello");          // string has length
  logLength([1, 2, 3, 4]);     // array has length
  logLength({ length: 10 });   // object with length
  
  // ❌ Error - number doesn't have 'length'
  /* logLength(123); */
  