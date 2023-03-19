class AbstractClass {
  templateMethod() {
    this.operation1();
    this.operation2();
  }

  operation1() {
    console.log("AbstractClass operation1");
  }

  operation2() {
    console.log("AbstractClass operation2");
  }
}

class ConcreteClass extends AbstractClass {
  operation1() {
    console.log("ConcreteClass operation1");
  }

  operation2() {
    console.log("ConcreteClass operation2");
  }
}

// Usage example:
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
