// Implementor: defines the interface for concrete implementations
class DrawAPI {
  drawCircle(x, y, radius) {
    throw Error("drawCircle() must be overriden!");
  }
}

// Concrete Implementor: provides an implementation of the DrawAPI interface
class RedCircle extends DrawAPI {
  drawCircle(x, y, radius) {
    console.log(`Drawing Circle[color: red, radius: ${radius}, x: ${x}, y: ${y}]`);
  }
}

class GreenCircle extends DrawAPI {
  drawCircle(x, y, radius) {
    console.log(`Drawing Circle[color: green, radius: ${radius}, x: ${x}, y: ${y}]`);
  }
}

// Abstraction: defines the interface for the higher-level abstraction
class Shape {
  constructor(drawAPI) {
    this.drawAPI = drawAPI;
  }

  // This abstraction lets a specific implementation decide how to do the draw function
  draw() {
    throw Error("drawCircle() must be overriden!");
  }
}

// Refined Abstraction: provides a specific implementation of the Shape interface
class Circle extends Shape {
  constructor(x, y, radius, drawAPI) {
    super(drawAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  // overriden draw function decoupling abstraction from implementation
  draw() {
    this.drawAPI.drawCircle(this.x, this.y, this.radius);
  }
}

// Usage example:
const redCircle = new Circle(100, 100, 10, new RedCircle());
const greenCircle = new Circle(200, 200, 20, new GreenCircle());

redCircle.draw(); // Output: Drawing Circle[color: red, radius: 10, x: 100, y: 100]
greenCircle.draw(); // Output: Drawing Circle[color: green, radius: 20, x: 200, y: 200]
