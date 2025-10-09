// 🎮 keyof Operator with Generics Example

type Game = {
    title: string;
    platform: string;
    price: number;
    released: boolean;
  };
  
  // keyof Game → "title" | "platform" | "price" | "released"
  type GameKeys = keyof Game;
  
  const key: GameKeys = "platform"; // ✅ Only valid keys allowed
  
  // Generic function using keyof
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const game = {
    title: "Legend of Code",
    platform: "PC",
    price: 2499,
    released: true,
  };
  
  console.log(getProperty(game, "title"));     // 🎮 string
  console.log(getProperty(game, "price"));     // 💰 number
  console.log(getProperty(game, "released"));  // ✅ boolean
  
  // ❌ Error: 'genre' does not exist in type Game
  // console.log(getProperty(game, "genre"));
  
  // Updating object safely using keyof + generics
  function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
  }
  
  updateProperty(game, "price", 1999);
  updateProperty(game, "released", false);
  
  console.log("🎯 Updated Game:", game);
  