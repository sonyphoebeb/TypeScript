
class Order {
    constructor(public cuisineType: string, public mealCategory: string) {}
  }
  
  class Swiggy extends Order {
    constructor(
      cuisineType: string,
      mealCategory: string,
      public restaurantName: string,
      public itemName: string,
      public itemQuantity: number
    ) {
      super(cuisineType, mealCategory);
    }
  
    orderedItems() {
      console.log(
        `🟠 Swiggy Order → ${this.itemQuantity} ${this.itemName} (${this.cuisineType} - ${this.mealCategory}) from ${this.restaurantName}`
      );
    }
  }

  class Zomato extends Order {
    constructor(
      cuisineType: string,
      mealCategory: string,
      public restaurantName: string,
      public itemName: string,
      public itemQuantity: number
    ) {
      super(cuisineType, mealCategory);
    }
  
    orderedItems() {
      console.log(
        `🔴 Zomato Order → ${this.itemQuantity} ${this.itemName} (${this.cuisineType} - ${this.mealCategory}) from ${this.restaurantName}`
      );
    }
  }

  function handleOrder(order: Order) {
    if (order instanceof Swiggy) {
      order.orderedItems();
    } else if (order instanceof Zomato) {
      order.orderedItems(); // ✅ fixed missing parentheses
    } else {
      console.log("❌ Invalid Order");
    }
  }
  
  const swiggyOrder = new Swiggy("Indian", "Main Course", "Khandari", "Chicken Biryani", 2);
  const zomatoOrder = new Zomato("Chinese", "Main Course", "Green Park", "Egg Noodles", 3);
  
  // ✅ Execute
handleOrder(swiggyOrder);
handleOrder(zomatoOrder);