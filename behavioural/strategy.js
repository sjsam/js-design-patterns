class Fedex {
	calculate = (pkg)=>{
		// Do something with pkg
		return 2.45;
	}
	describe = ()=>'Fedex'
}

class UPS {
	calculate = (pkg)=>{
		// Do something with pkg
		return 2.6;
	}
	describe = ()=>'UPS'
}

class USPS {
	calculate = (pkg)=>{
		// Do something with pkg
		return 2.35;
	}
	describe = ()=>'USPS'
}

class CourierComparer {
	constructor(services){
		this.services = services;
	}
	calculate=()=>{
		console.log("Price comparison")
		// Strategy pattern in action.
		this.services.map((service)=>{console.log(service.describe(), service.calculate())})
	}
}

fedex = new Fedex();
ups = new UPS();
usps = new USPS();
courier = new CourierComparer([fedex,ups,usps])
courier.calculate();

