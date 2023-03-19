/*
 * Retry pattern doesn't belong to creational, behavioural or structural pattern
 */

function doSomething(){
	attempts = 0;
	while(true){
		attempts++;
		try{
			simulateExternalAPICall()
			console.log('Succeeded');
			break;
		}
		catch(e){
			console.log('Failed attempt');
			if(attempts<=2){
				continue;
			}
			else {
				console.log('Maximum attempts reached');
				console.log('Exiting..')
				break;
			}
		}
	}
}

function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function simulateExternalAPICall(){
	let shouldPass = Math.random() <= 0.5;
	if(shouldPass){
		return true;
	}

	throw Error("Some API error")
}

while(true){
	doSomething();
	wait(5000);
}