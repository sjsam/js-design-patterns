/*
 * Different objects need to interact with each other
 * A mediator helps them to interact
 * This is a behavioural pattern
 */

class Member {

	constructor(name){
		this.name = name;
		this.chatroom  = null;
	}

	addChatRoom = (chatroom)=>{
		this.chatroom = chatroom;
	}

	receiveMessage = (from,message)=>{
		console.log(`Hello ${this.name}, you have a new message from ${from}\nMessage Content : ${message}`);
	}

	pushMessage = (toName,message)=>{
		const toInstance = this.chatroom.find(toName);
		toInstance.receiveMessage(this.name,message)
	}

}

class ChatRoom {

	constructor(name,members){
		this.name = name;
		this.members = [];
		for(let member of members){
			this.members.push(member);
			member.chatroom = this;
		}
	}

    // Mediator has the complex mechanism to help members discover each other.
	find = (toName) => {
		const toInstance = this.members.find((m)=>m.name === toName)
		if(!toInstance){
			throw Error('Member not found');
		}
		return toInstance;
	}

	addMember = (member) => {
		this.members.push(member)
		member.chatroom = this;
	}

	removeMember = (member) => {
		this.members = this.members.filter((membr)=>membr!=member);
	}

}

let saj = new Member('Sajith')
let ren = new Member('Renji')
let chatRoom = new ChatRoom('chit-chat',[saj,ren])
saj.pushMessage('Renji','Hi da! how you?')
ren.pushMessage('Sajith','Hello da! I am good. Thank you! How u?')
