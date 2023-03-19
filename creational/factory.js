/*
 * Factory design pattern is a creational design pattern
 * which helps to create new instances of different classes seamlessly
 */

class Employee {
	constructor(name,gender){
		this.name = name;
		this.gender = gender;
	}
}

class Developer extends Employee {
	constructor(name,gender,langs){
		super(name,gender);
		this.langs = langs;
	}
}

class Tester extends Employee {
	constructor(name,gender,tools){
		super(name,gender);
		this.tools = tools
	}
}

/*
let saj = new Developer('Sajith','m',['C++','Rust']);
let ren = new Tester('Renji','m',['Selenium','Appium']);

console.log(saj)
console.log(ren)
*/


/*
 * Well, managing the employees using separate classes can become tedious
 * This is where a factory comes into play.
 */

class EmployeeFactory {
	createEmployee(type,name,gender,extras){
		if('developer' === type){
			return new Developer(name,gender,extras);
		}
		else if('tester' === type){
			return new Tester(name,gender,extras);
		}
		else {
			throw(Error('Not a valid type'))
		}
	}
}

let employeeFactory = new EmployeeFactory()
try{
	let saj = employeeFactory.createEmployee('developer','Sajith','m',['C++','Rust']);
	console.log(saj)
	let ren = employeeFactory.createEmployee('tester','Renji','m',['Appium','Selenium']);
	console.log(ren)
	let spam = employeeFactory.createEmployee('unknown','Spam','m',['Non-sense']);
	console.log(spam)
}
catch(e){
	console.log('Error',e.message)
}

// Similary we can create a 'createEmployees' function for creating multiple employees.
