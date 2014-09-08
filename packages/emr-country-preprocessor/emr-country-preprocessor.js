var exec = require('child_process').exec;

var cmd = "cp";

module.exports = {
    run : function(root, path, settings, doc, callback) {
        var cmd = "cp views/lib/reports_schema_" + settings.country + ".js views/lib/reports_schema.js && cp templates/reports_" + settings.country + ".html templates/reports.html"
        exec(cmd, function(error, stdout, stderr) {
            return callback(error, doc);
        })
    }
}