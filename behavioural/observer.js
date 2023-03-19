class Topic {
	constructor(){
		console.log('Subject activated')
		this.subscribers = []
	}
	subscribe = (f)=>{
		this.subscribers.push(f)
	}
	unsubscribe = (f)=>{
		this.subscribers = this.subscribers.filter((i)=>i!=f);
	}

	fire = ()=>{
		this.subscribers.forEach((f)=>{
			f.call(null,{topic:'MyTopic',time:(new Date()).toString()})
		})
	}
}

console.log('Subscribing sub1 and sub2');

const sub1 = (obj) => {
	console.log('Sub1')
	console.log(obj)
}

const sub2 = (obj) => {
	console.log('Sub2')
	console.log(obj)
}

const topic = new Topic()
topic.subscribe(sub1)
topic.subscribe(sub2)
console.log('Firing');
topic.fire()

console.log('Ubsubscribing sub2');
topic.unsubscribe(sub2)

console.log('Firing again');
topic.fire()
