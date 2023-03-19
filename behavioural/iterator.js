/*
 * Behavioural pattern to help loop through any type of object
 */

class Iterator {
	constructor(items=[]){
		this.items = items;
		this.index = 0;
	}

	hasNext = () => this.index < this.items.length;
	next = () => this.items[this.index++]
}

let items = [1,2,'Sajith',2.32]
let iterator = new Iterator(items)
while(iterator.hasNext()){
	console.log(iterator.next())
}