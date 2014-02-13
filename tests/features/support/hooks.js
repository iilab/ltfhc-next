var myHooks = function() {
	this.World = require("../support/world.js").World;
	
	this.Before(function() {
		// Just like inside step definitions, "this" is set to a World instance.
		// It's actually the same instance the current scenario step definitions
		// will receive.

		// Let's say we have a bunch of "maintenance" methods available on our World
		// instance, we can fire some to prepare the application for the next
		// scenario:

		debugger;
		
		//callback(new Error("Hello"));

		this.createTestDB(function (err, res) {
		//	callback.fail(new Error("Expected to be on page with title " + title));
			console.log("Success TestDB")
		});
		this.createTestData(function (err, res) {
			console.log(res)
		});

		// Don't forget to tell Cucumber when you're done:
		//callback();
	});

	this.After(function(callback) {
		// Again, "this" is set to the World instance the scenario just finished
		// playing with.

		// We can then do some cleansing:

		this.removeTestDB();

		// Release control:
		callback();
	});
};

module.exports = myHooks;
