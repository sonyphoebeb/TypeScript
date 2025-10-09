// Generic Class Example
class StorageBox<T> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    getAllItems(): T[] {
      return this.items;
    }
  }
  
  // Usage
  const stringBox = new StorageBox<string>();
  stringBox.addItem("Laptop");
  stringBox.addItem("Headphones");
  
  const numberBox = new StorageBox<number>();
  numberBox.addItem(100);
  numberBox.addItem(200);
  
  console.log("🎁 String Box:", stringBox.getAllItems());
  console.log("📦 Number Box:", numberBox.getAllItems());
  