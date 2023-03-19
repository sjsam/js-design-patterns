class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }
}

class Expression {
  interpret(context) {
    throw new Error("Not implemented!");
  }
}

class PlusExpression extends Expression {
  interpret(context) {
    context.output += context.input.length;
  }
}

class MinusExpression extends Expression {
  interpret(context) {
    context.output -= context.input.length;
  }
}

// Usage example:
const context = new Context("hello world");
const expressions = [
  new PlusExpression(),
  new MinusExpression(),
  new PlusExpression(),
  new MinusExpression(),
  new MinusExpression(),
];

expressions.forEach((expression) => expression.interpret(context));
console.log(context.output); // Output: -11
