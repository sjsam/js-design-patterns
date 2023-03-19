class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }
}

// Usage example:
const originalSheep = new Sheep("Dolly", 50);
const clonedSheep = originalSheep.clone();

console.log(originalSheep);
console.log(clonedSheep);

console.log(originalSheep === clonedSheep); // Output: false
