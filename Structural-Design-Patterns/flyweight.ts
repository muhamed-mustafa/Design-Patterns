interface CarFlyWeight {
  getMake(): string;
  getModel(): string;
  getColor(): string;
  getDetails(): string;
}

class Car implements CarFlyWeight {
  constructor(
    private make: string,
    private model: string,
    private color: string
  ) {}
  getMake(): string {
    return this.make;
  }
  getModel(): string {
    return this.model;
  }
  getColor(): string {
    return this.color;
  }
  getDetails(): string {
    return `Car: ${this.make} ${this.model}, Color: ${this.color}`;
  }
}

class CarFactory {
  private cars: { [key: string]: Car } = {};

  getCar(make: string, color: string, model: string): Car {
    const key = `${make}_${color}_${model}`;

    if (!this.cars[key]) {
      this.cars[key] = new Car(make, model, color);
    }

    return this.cars[key];
  }

  getTotalCarsMade(): number {
    return Object.keys(this.cars).length;
  }
}

const carFactory = new CarFactory();

const car1 = carFactory.getCar("Toyota", "Corolla", "Red");
const car2 = carFactory.getCar("Toyota", "Corolla", "Red");
const car3 = carFactory.getCar("Honda", "Civic", "Blue");
const car4 = carFactory.getCar("Toyota", "Corolla", "Red");

console.log(car1.getDetails()); // Car: Toyota Corolla, Color: Red
console.log(car2.getDetails()); // Car: Toyota Corolla, Color: Red
console.log(car3.getDetails()); // Car: Honda Civic, Color: Blue
console.log(car4.getDetails()); // Car: Toyota Corolla, Color: Red

console.log(carFactory.getTotalCarsMade()); // 2
