# JavaScript Design Patterns
Design patterns in JavaScript are reusable solutions to commonly occurring programming problems. They are best practices that provide a structured approach to writing code that is more readable, maintainable, and efficient. Design patterns can help you write better code, avoid common mistakes, and improve the quality of your JavaScript applications. This repo showcases some of the common design patterns while broadly diving those into three.

## Design pattern classification
In Javascript, the design patterns can be classified into four broad categories which are as follows:
- Structural Design Patterns<br>
Structural design patterns are a category of design patterns that focus on the composition of classes and objects to form larger structures and provide new functionality. These patterns are concerned with how classes and objects are composed to form larger structures, and how the interfaces between these structures can be simplified and optimized.
- Behavioural Design Patterns<br>
Behavioral design patterns are a category of design patterns that focus on communication and interaction between objects, and the distribution of responsibilities among objects. These patterns are concerned with how objects communicate with each other and how they work together to achieve common goals.
- Creational Design Patterns<br>
Creational design patterns are a category of design patterns that focus on object creation mechanisms, trying to create objects in a manner suitable to the situation. These patterns are concerned with the process of object creation and the ways in which objects can be instantiated and composed into larger structures.
- Other useful patterns<br>
Other common patterns prevalent in programming that don't below the above three.
### 1. Structural Design Patterns
- Proxy pattern<br>
The Proxy pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. The Proxy pattern involves creating a new object that has the same interface as an existing object, and which forwards requests to the original object or performs additional logic before or after forwarding the request.
- Adapter pattern<br>
The Adapter pattern is a structural design pattern that allows incompatible interfaces to work together. This pattern is used when we want to use an existing class that has an interface that is not compatible with the interface we need.
- Bridge pattern<br>
The Bridge pattern is a structural design pattern that decouples an abstraction from its implementation, allowing them to vary independently. This pattern involves creating two separate abstraction and implementation hierarchies, which can then be composed independently.
- Composite Pattern<br>
The Composite pattern is a structural design pattern that allows you to treat a group of objects in the same way as a single object. This pattern is used when we want to represent a hierarchical structure of objects as a tree-like structure, where the individual objects and groups of objects are treated in the same way.
- Decorator Pattern<br>
The Decorator pattern is a structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. This pattern involves wrapping an object within another object, thereby adding new behaviors or responsibilities to it.In other words, the Decorator pattern involves adding functionality to an object at runtime by wrapping it in another object that has the same interface.
- Facade Pattern<br>
The Facade pattern is a structural design pattern that provides a simplified interface to a complex system of classes, objects, or APIs. The Facade pattern involves creating a single class or object that exposes a simple interface that is easy to use, hiding the underlying complexity of the system.
- Flyweight Pattern<br>
The Flyweight pattern is a structural design pattern that is used to minimize memory usage and improve performance by sharing as much data as possible with similar objects. The Flyweight pattern involves creating a pool of reusable objects that can be shared among multiple clients, instead of creating a new object every time one is needed.
### 2. Behavioural Design Patterns
- Strategy Pattern<br>
Defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing clients to switch algorithms easily.
- Iterator Pattern<br>
Provides a way to access the elements of an aggregate object without exposing its underlying representation.
- Mediator Pattern<br>
Defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly.
- Observer Pattern<br>
Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- Visitor Pattern<br>
Separates an algorithm from an object structure by moving the algorithm into a separate object.
- Command Pattern<br>
Encapsulates a request as an object, allowing clients to parameterize requests with different objects, queue or log requests, and support undoable operations.
- Template Method Pattern<br>
Defines the skeleton of an algorithm in a base class, allowing subclasses to provide specific behavior while preserving the structure of the algorithm.
- State Pattern<br>
Allows an object to alter its behavior when its internal state changes, encapsulating the state-specific behavior into separate classes.
- Chain of Responsibility Pattern<br>
Allows multiple objects to handle a request without knowing which object will handle it.
- Interpreter Pattern<br>
Defines a language and a way to interpret it, allowing clients to interpret sentences in the language.
### 3. Creational Design Patterns
- Factory Pattern<br>
The Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- Abstract Factory Pattern<br>
Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
- Singleton Pattern<br>
The Singleton pattern is a creational design pattern that ensures that a class has only one instance and provides a global point of access to that instance. The basic idea is to restrict the instantiation of a class to a single instance and provide a way for other objects to access that instance.
- Builder Pattern<br>
Separates the construction of a complex object from its representation, allowing for different representations to be created using the same construction process.
- Prototype Pattern<br>
Creates new objects by copying an existing object, allowing for the creation of new objects without requiring the use of a constructor.
### 4. Other Patterns
- Retry Pattern<br>
The retry pattern is a design pattern used to handle errors in software systems that can be resolved by retrying the failed operation. The basic idea is to automatically retry a failed operation for a certain number of times before giving up and reporting an error to the user.

## References
Refer to [this chat GPT conversation](https://chat.openai.com/chat/4ffa9ed5-9674-4f5b-8077-0f0511a1b90e) for more details.

