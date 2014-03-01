var myHooks = function() {
	
	this.Before(function(callback) {
		// Just like inside step definitions, "this" is set to a World instance.
		// It's actually the same instance the current scenario step definitions
		// will receive.

		// Let's say we have a bunch of "maintenance" methods available on our World
		// instance, we can fire some to prepare the application for the next
		// scenario:
				
		var util = require('util'),
            exec = require('child_process').exec;   

	    exec(["kanso deletedb test"], function(error, stdout, stderr) {
	        if (error) {
	            if (stdout.indexOf("not_found") != -1) {
	            	// Continue. test db doesn't exist which is fine.
	            } else {
		            util.puts(stdout);
		            return
	            }
	        }
    	    exec(["kanso push .. test"], function(error, stdout, stderr) {
    	        if (error) {
    	            util.puts(stderr);
		            return
                    // I need to also deploy emr/_local/instance_settings
    	        }
        	    exec(["kanso upload features/data test"], function(error, stdout, stderr) {
        	        if (error) {
        	            util.puts(stderr);
	    	            return
    		        }
                    // I also need to create the correct user "user:pass"
                    
                    // Don't forget to tell Cucumber when you're done:
            		callback()
        	    });                
    	    });
	    });
	});

	this.After(function(callback) {
		// Again, "this" is set to the World instance the scenario just finished
		// playing with.

		// We can then do some cleansing:

		// world.removeTestDB();

		// Release control:
		callback();
	});
};

module.exports = myHooks;
