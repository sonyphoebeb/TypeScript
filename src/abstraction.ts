// Abstraction – Hiding details, showing only essentials

abstract class Vehicle {
    constructor(public brand: string) {}
    abstract move(): void; // only define, not implement
  }
  
  class Car extends Vehicle {
    move(): void {
      console.log(`${this.brand} Car is driving on road.`);
    }
  }
  
  class Airplane extends Vehicle {
    move(): void {
      console.log(`${this.brand} Airplane is flying in sky.`);
    }
  }
  
  // Usage
  const car = new Car("Tesla");
  car.move();
  
  const plane = new Airplane("Boeing");
  plane.move();
  