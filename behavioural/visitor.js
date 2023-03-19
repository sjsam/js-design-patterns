class Employee {
	constructor(name,salary){
		this.name = name;
		this.salary = salary;
	}

	getSalary = () => this.salary;

	setSalary = (salary) => {
		this.salary = salary;
	}

	// way to get in a visitor
	accept = (f)=> {
		f(this)
	}
}

// our visitor
const calculateIT = (emp)=>{
	console.log('Name : ',emp.name);
	console.log('Salary : ',emp.salary);
	console.log('Tax : ',.20 * emp.salary);
}

let saj = new Employee('Sajith','20000');
saj.accept(calculateIT);