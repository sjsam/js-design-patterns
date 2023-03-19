/*
 * The singleton pattern
 * Typical scenario: You can have multiple processes but you need only one process manager.
 */

class Process {
  /* There can be mulitiple processes managed by a single process manager */
}

class ProcessManager {
	static initializing;
	static singletonIntance;

	static {
		this.initializing = false;
	}

	constructor(){
	 	if(ProcessManager.initializing){
	    	console.log('constructor called');
	    	ProcessManager.initializing = false;
		}
		else {
			throw Error('The constructor is private!')
		}
	}

	static getInstance(){
		if(ProcessManager.singletonIntance instanceof ProcessManager){
			
			return ProcessManager.singletonIntance;
		}
		else {
			ProcessManager.initializing = true;
			ProcessManager.singletonIntance = new ProcessManager();
			return ProcessManager.singletonIntance;
		}
	}
}

let pm1 = ProcessManager.getInstance()
let pm2 = ProcessManager.getInstance()
let pm3 = ProcessManager.getInstance()

console.log('pm1 === pm2 === pm3',pm1 === pm2 && pm2 === pm3)
// Because of the design new ProcessManager() fails
try{
let pm4 = new ProcessManager()
}
catch(e){
	console.log('Error : ',e.message);
}