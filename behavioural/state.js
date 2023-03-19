class Context {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle();
  }
}

class State {
  handle() {
    throw new Error("Not implemented!");
  }
}

class ConcreteStateA extends State {
  handle() {
    console.log("ConcreteStateA handling request.");
  }
}

class ConcreteStateB extends State {
  handle() {
    console.log("ConcreteStateB handling request.");
  }
}

// Usage example:
const context = new Context(new ConcreteStateA());
context.request(); // Output: ConcreteStateA handling request.
context.setState(new ConcreteStateB());
context.request(); // Output: ConcreteStateB handling request.
