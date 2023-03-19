class Request {
  constructor(amount) {
    this.amount = amount;
  }

  getAmount() {
    return this.amount;
  }
}

class Handler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    throw Error(`The value ${request.getAmount()} is too high for all the handlers in the system`)
  }
}

class ConcreteHandler1 extends Handler {
  handle(request) {
    if (request.getAmount() <= 100) {
      console.log("ConcreteHandler1 handled the request");
      return true;
    } else {
      return super.handle(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handle(request) {
    if (request.getAmount() <= 500) {
      console.log("ConcreteHandler2 handled the request");
      return true;
    } else {
      return super.handle(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  handle(request) {
    if (request.getAmount() <= 1000) {
      console.log("ConcreteHandler3 handled the request");
      return true;
    } else {
      return super.handle(request);
    }
  }
}

// Usage example:
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3);
try{
    handler1.handle(new Request(50)); // Output: ConcreteHandler1 handled the request
  handler1.handle(new Request(200)); // Output: ConcreteHandler2 handled the request
  handler1.handle(new Request(1000)); // Output: ConcreteHandler3 handled the request
  handler1.handle(new Request(2000)); // Output: ConcreteHandler3 handled the request
}
catch(e){
  console.log(`Error : ${e.message}`)
}

