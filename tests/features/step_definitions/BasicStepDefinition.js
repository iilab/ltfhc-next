var util = require('util'),
    exec = require('child_process').exec;   

var aTest = function () {
	this.World = require("../support/world.js").World;

	this.Given("I have cleaned the deployment", function(callback) {
	    exec(["kanso deletedb test"], function(error, stdout, stderr) {
	        if (error) {
	            util.puts(stderr);
	        }
	        if (callback) {
	            callback();
	        }
	    });
	});

	this.Given("I have deployed the app", function(callback) {
	    exec(["kanso push .. test"], function(error, stdout, stderr) {
	        if (error) {
	            util.puts(stderr);
	        }
	        if (callback) {
	            callback();
	        }
	    });
        // I need to also deploy emr/_local/instance_settings
	});

	this.Given("I have uploaded test data", function(callback) {
	    exec(["kanso upload features/data test"], function(error, stdout, stderr) {
	        if (error) {
	            util.puts(stderr);
	        }
	        if (callback) {
	            callback();
	        }
	    });                
	});
	
	this.Given("I visit the home page", function(callback) {
		this.visit('http://localhost:5984/emr_test_local/_design/emr/_rewrite/', function () {
		    callback()
		});
	});

	this.When("I click on Login", function (callback) {
		callback.pending();
	});

	this.Then('I should see "$message" message', function (message, callback) {
        
        util.puts("before browser");
        var pageMessage = this.browser.html();
        util.puts(pageMessage);
    
	    if (message === pageMessage) {
	      callback();
	    } else {
	      callback.fail(new Error('Expected to be on page with title "' + message + '"'));
	    }            
	});
};

module.exports = aTest;