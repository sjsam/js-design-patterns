class Calculator {
  constructor() {
    this.currentValue = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.currentValue = command.undo(this.currentValue);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

// Usage example:
const calculator = new Calculator();
calculator.executeCommand(new AddCommand(5));
calculator.executeCommand(new SubtractCommand(3));
console.log(calculator.currentValue); // Output: 2
calculator.undo();
console.log(calculator.currentValue); // Output: 5
