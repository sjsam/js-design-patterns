// Adaptee: the existing interface that needs to be adapted
class OldCalculator {
  constructor() {
    this.operations = function(num1, num2, operation) {
      switch (operation) {
        case 'add':
          return num1 + num2;
        case 'subtract':
          return num1 - num2;
        default:
          return NaN;
      }
    }
  }
}

// Target: the desired interface that the client expects
class NewCalculator {
  constructor() {
    this.add = function(num1, num2) {
      return num1 + num2;
    };
    this.subtract = function(num1, num2) {
      return num1 - num2;
    };
  }
}

// Adapter: adapts the OldCalculator interface to the NewCalculator interface
class CalcAdapter {
  constructor() {
    const oldCalc = new OldCalculator();

    this.add = function(num1, num2) {
      return oldCalc.operations(num1, num2, 'add');
    };
    this.subtract = function(num1, num2) {
      return oldCalc.operations(num1, num2, 'subtract');
    };
  }
}

// Usage example:
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // Output: 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // Output: 15

const adapterCalc = new CalcAdapter();
console.log(adapterCalc.add(10, 5)); // Output: 15
