// Component
class Car {
  getPrice() {
    return 10000;
  }

  getDescription() {
    return 'Car';
  }
}

// Concrete Component
class Sedan extends Car {
  getPrice() {
    return super.getPrice() + 5000;
  }

  getDescription() {
    return 'Sedan';
  }
}

// Decorator
class CarDecorator extends Car {
  constructor(car) {
    super();
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice();
  }

  getDescription() {
    return this.car.getDescription();
  }
}

// Concrete Decorator
class LeatherSeats extends CarDecorator {
  constructor(car) {
    super(car);
  }

  getPrice() {
    return super.getPrice() + 2000;
  }

  getDescription() {
    return `${super.getDescription()} with leather seats`;
  }
}

// Usage example:
const sedan = new Sedan();
const sedanWithLeatherSeats = new LeatherSeats(sedan);
console.log(sedan.getDescription()); // Output: Sedan
console.log(sedan.getPrice()); // Output: 15000
console.log(sedanWithLeatherSeats.getDescription()); // Output: Sedan with leather seats
console.log(sedanWithLeatherSeats.getPrice()); // Output: 17000
