// Component
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getTotalSalary() {
    return this.salary;
  }
}

// Leaf
class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
}

// Composite
class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getTotalSalary() {
    let totalSalary = this.salary;
    for (let employee of this.employees) {
      totalSalary += employee.getTotalSalary();
    }
    return totalSalary;
  }
}

// Usage example:
const john = new Developer('John Doe', 30000);
const jane = new Developer('Jane Doe', 40000);
const manager = new Manager('Mike Smith', 100000);
manager.addEmployee(john);
manager.addEmployee(jane);
console.log(manager.getTotalSalary()); // Output: 170000
