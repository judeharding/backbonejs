var Vehicle = Backbone.Model.extend({

    validate: function(attrs){
        if(!attrs.registrationNumber)
            return "Registration number is required";
    },

    urlRoot: "/api/vehicles",

    idAttribute: "registrationNumber",

    start: function(){
		console.log("Vehicle started.");
	}

});
// ---
var Car = new Vehicle.extend({
    // start: console.log("Car with registration number + {registrationNumber} + started.");

    start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
})
// ---
var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});
// ---
car.unset("registrationNumber");

if (car.isValid())
    console.log("car is valid");
    else(
	console.log(car.validationError);
)
// ---
car.set("registrationNumber", "XLI887");

if (!car.isValid())
	console.log(car.validationError);

car.start();
