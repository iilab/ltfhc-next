// features/support/world.js

var util = require('util'),
    exec = require('exec'),
    zombie = require('zombie');

var World = function World(callback) {
    this.browser = new zombie(); // this.browser will be available in step definitions

    this.visit = function(url, callback) {
        this.browser.visit(url, callback);
    };

    this.createTestDB = function(callback) {
        exec(["kanso", "push", "test"], function(error, stdout, stderr) {
            if (error) {
                util.puts(stderr);
            }
            if (callback) {
                callback(null, stdout);
            }
        });
    };

    this.removeTestDB = function(user, password, callback) {
        exec(["kanso", "deletedb", "test"], function(error, stdout, stderr) {
            if (error) {
                util.puts(stderr);
            }
            if (callback) {
                callback(null, stdout);
            }
        });
    };

    this.createTestData = function(browser, user, password, callback) {
        exec(["kanso", "upload", "features/data/example-visits.json", "test"], function(error, stdout, stderr) {
            if (error) {
                util.puts(stderr);
            }
            if (callback) {
                callback(null, browser);
            }
        });
    };

    this.login = function(browser, username, password, callback) {
        browser.clickLink(".login", function() {
            browser.
            fill("username", username).
            fill("password", password).
            clickLink(".modal-footer .btn.btn-primary", callback);
        });
    };


    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;
