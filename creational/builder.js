class Car {
  constructor(make, model, year, color, seats) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.seats = seats;
  }
}

class CarBuilder {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setSeats(seats) {
    this.seats = seats;
    return this;
  }

  build() {
    return new Car(this.make, this.model, this.year, this.color, this.seats);
  }
}

// Usage example:
const car = new CarBuilder("Toyota", "Camry", 2021)
  .setColor("Red")
  .setSeats(5)
  .build();

console.log(car);
// Output: Car { make: 'Toyota', model: 'Camry', year: 2021, color: 'Red', seats: 5 }
