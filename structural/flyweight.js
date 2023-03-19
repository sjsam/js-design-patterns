// Flyweight Factory
class CircleFactory {
  constructor() {
    this.circles = {};
  }

  getCircle(color) {
    if (!this.circles[color]) {
      this.circles[color] = new Circle(color);
    }
    return this.circles[color];
  }

  getCircleCount() {
    return Object.keys(this.circles).length;
  }
}

// Flyweight
class Circle {
  constructor(color) {
    this.color = color;
  }

  draw(x, y, radius) {
    console.log(`Drawing a ${this.color} circle at (${x}, ${y}) with radius ${radius}.`);
  }
}

// Usage example:
const circleFactory = new CircleFactory();
const colors = ['red', 'blue', 'green'];
for (let i = 0; i < 20; i++) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const circle = circleFactory.getCircle(color);
  circle.draw(Math.random() * 100, Math.random() * 100, Math.random() * 10);
}
console.log(`Total number of circles: ${circleFactory.getCircleCount()}`);
