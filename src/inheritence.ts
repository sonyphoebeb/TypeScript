// Inheritance Examples

// ✅ Interface
interface Device {
    brand: string;
    powerOn(): void;
  }
  
  // ✅ Abstract Class
  abstract class Appliance {
    constructor(public name: string) {}
    abstract turnOn(): void; // must be implemented
    plugIn(): void {
      console.log(`${this.name} is plugged in.`);
    }
  }
  
  // ✅ Class with Inheritance
  class WashingMachine extends Appliance implements Device {
    brand: string;
    constructor(name: string, brand: string) {
      super(name);
      this.brand = brand;
    }
    turnOn(): void {
      console.log(`${this.brand} ${this.name} is running.`);
    }
    powerOn(): void {
      console.log(`${this.brand} device powered on.`);
    }
  }
  
  // ✅ Multiple Inheritance (via interfaces)
  interface Smart {
    connectWifi(): void;
  }
  class SmartFridge extends Appliance implements Device, Smart {
    brand: string;
    constructor(name: string, brand: string) {
      super(name);
      this.brand = brand;
    }
    turnOn(): void {
      console.log(`${this.brand} ${this.name} cooling started.`);
    }
    powerOn(): void {
      console.log(`${this.brand} SmartFridge is powered on.`);
    }
    connectWifi(): void {
      console.log(`${this.brand} SmartFridge connected to WiFi.`);
    }
  }
  
  // ✅ Multilevel Inheritance
  class Animal {
    eat() {
      console.log("Animal is eating.");
    }
  }
  class Mammal extends Animal {
    walk() {
      console.log("Mammal is walking.");
    }
  }
  class Dog extends Mammal {
    bark() {
      console.log("Dog is barking.");
    }
  }
  
  // Testing
  const wm = new WashingMachine("Washing Machine", "LG");
  wm.plugIn();
  wm.turnOn();
  
  const fridge = new SmartFridge("Fridge", "Samsung");
  fridge.powerOn();
  fridge.connectWifi();
  
  const dog = new Dog();
  dog.eat();
  dog.walk();
  dog.bark();
  