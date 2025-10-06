
// typeOf.ts
// TypeOf is a type guard that checks the type of a value
// It is a built-in type guard that checks the type of a value
// It is a type guard that checks the type of a value

function printValue(value: string | number) {
    if (typeof value === "string") {
      console.log("String length:", value.length);
    } else {
      console.log("Number squared:", value * value);
    }
  }
  printValue("Sony");
  printValue(5);
  
  function showValue(value: number | string){
    if(typeof value === "number"){
      console.log("Number + 10: ", value + 10)
    }else{
      console.log("UpperCase: ", value.toUpperCase())
    }
  }
   
  console.log();

  showValue(20);
  showValue("sony");