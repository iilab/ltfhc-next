// features/support/world.js

var zombie = require('zombie');

var World = function World(callback) {
    var path = "/usr/local/bin/"
    
    this.browser = new zombie({ debug: true }); // this.browser will be available in step definitions
    this.browser.runScripts = true;
    this.browser.on('error',function (err){console.log(err.stack)});
        
    this.visit = function(url, callback) {
        this.browser.visit(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;