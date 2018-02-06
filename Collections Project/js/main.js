
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// from the MODELS PROJECT
var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});


// creating a backbone collection for the vehicle model above
var Vehicles = Backbone.Collection.extend({
	Model: Vehicle
});


// print each car to the console
var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});


// adding cars to the vehicle collection
var vehicles = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);


// find all the blue cars
var blueCars = vehicles.where({ color: "Blue" });
console.log("Blue cars", blueCars);


// find the car with the reg number xli887
var carXLI887 = vehicles.findWhere({ registrationNumber: "XLI887" });
console.log("Car with registration number XLI887", carXLI887);


// delete the car with reg number xli887
vehicles.remove(carXLI887);


// log the collection to json
console.log("Vehicles as JSON", vehicles.toJSON());


// iteration
// var iterate = 0;
// console.log("vehicle length - ", vehicles.length);
// if (iterate < vehicles.length) {
// 	console.log("Car Reg No. = ", vehicles.registrationNumber);
// 	iterate ++;
// }


vehicles.each(function(vehicle){
	console.log(vehicle);
});
