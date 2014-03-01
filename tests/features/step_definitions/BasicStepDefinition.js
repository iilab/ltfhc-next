var aTest = function () {
	this.World = require("../support/world.js").World;

	this.Given("I visit the home page", function(callback) {
		this.visit('http://127.0.0.1:5984/emr_test_local/_design/emr/_rewrite/', function () {
		    callback()
		});
	});

	this.When("I click on Login", function (callback) {
        this.browser.
          clickLink("Login", function() {
              callback()
          })
	});

	this.When("I enter wrong credentials", function (callback) {
        this.browser.
          fill("username", "test").
          fill("password", "pass").
          pressButton("Submit", function() {
              callback()
          })
	});

	this.When("I enter correct credentials", function (callback) {
        this.browser.
          fill("username", "user").
          fill("password", "pass").
          pressButton("Submit", function() {
              callback()
          })
	});

	this.Then('I should see "$message" message', function (message, callback) {
        
        var pageMessage = this.browser.text();
    
	    if (pageMessage.indexOf(message)!=-1) {
	      callback();
	    } else {
	      callback.fail('Expected to be on page with message "' + message + '"');
	    }            
	});
    
	this.Then('I should see an Error', function (callback) {
        
        var pageMessage = this.browser.text("#login-modal .modal-body");
    
	    if (pageMessage.indexOf("Error")!=-1) {
	      callback();
	    } else {
	      callback.fail('Expected to be on page with dialog');
	    }            
	});
    
	this.Then('I should see a modal dialog', function (callback) {
        
        var pageMessage = this.browser.text("#login-modal h4");
    
	    if (pageMessage.indexOf("Login")!=-1) {
	      callback();
	    } else {
	      callback.fail('Expected to be on page with dialog');
	    }            
	});

	this.Then('I should see the $title page', function (title, callback) {
        
        var pageMessage = this.browser.text("title");
    
	    if (pageMessage.indexOf(title)!=-1) {
	      callback();
	    } else {
	      callback.fail('Expected to be on page with dialog');
	    }            
	});

	this.Then('I should see the $title button', function (title, callback) {
        
        var pageMessage = this.browser.text(".new-patient .btn");
    
	    if (pageMessage.indexOf(title)!=-1) {
	      callback();
	    } else {
	      callback.fail('Expected to be on page with dialog');
	    }            
	});

	this.Then('What do I see?', function (callback) {
        
        var pageMessage = this.browser.html();
    
	    if (pageMessage) {
          console.log(pageMessage)
	      callback();
	    } else {
	      callback.fail('Expected to be seeing something on page');
	    }            
	});
    
};

module.exports = aTest;