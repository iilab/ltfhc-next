var exec = require('child_process').exec;
var async = require('async');
var path = require('path');
var fs = require('fs');


function readReportsDir(dir, callback) {
    fs.readdir(dir, function (err, filenames) {
        if (err) {
            return callback(err);
        }
        async.filterSeries(
            filenames,
            function (filename, cb) {
                if (filename[0] === '.') {
                    // ignore hidden files
                    return cb(false);
                }
                if (path.extname(filename) !== '.json') {
                    // only read json files
                    return cb(false);
                }
                fs.stat(path.resolve(dir, filename), function (err, stats) {
                    if (err) {
                        return callback(err);
                    }
                    cb(stats.isFile());
                });
            },
            function (files) {
                async.reduce(files, {}, function (obj, file, cb) {
                    fs.readFile(path.resolve(dir, file), function (err, data) {
                        if (err) {
                            return cb(err);
                        }
                        try {
                            var doc = JSON.parse(data.toString());
                        }
                        catch (e) {
                            console.error('Error reading: ' + file);
                            return cb(e);
                        }
                        obj[path.basename(file, '.json')] = doc;
                        cb(null, obj);
                    });
                }, callback);
            }
        );
    });
}

function readReports(path, settings, callback) {
    readReportsDir(path + '/schema/reports', function (err, reports1) {
        if (err) {
            return callback(err);
        }
        var country_path = path + '/schema/reports/' + settings.country;
        if (!fs.existsSync(country_path)) {
            // no country-specific reports
            return callback(null, reports1);
        }
        readReportsDir(country_path, function (err, reports2) {
            if (err) {
                return callback(err);
            }
            var result = reports1;
            for (var k in reports2) {
                result[k] = reports2[k];
            }
            return callback(null, result);
        });
    });
}

module.exports = {
    run : function(root, path, settings, doc, callback) {
        readReports(path, settings, function (err, reports) {
            if (err) {
                return callback(err);
            }
            var outfile = (
                path + '/views/lib/reports_schema_' + settings.country + '.js'
            );
            var json = JSON.stringify(reports, null, 4);
            var lines = json.split('\n');
            var indented = lines.join('\n    ');
            var data = 'exports.reports = function () {\n' +
            '    return ' + indented + ';\n' +
            '};\n';
            fs.writeFileSync(outfile, data);

            var cmd = "cp views/lib/reports_schema_" + settings.country + ".js " +
                "views/lib/reports_schema.js && " +
                "cp templates/reports_" + settings.country + ".html " +
                "templates/reports.html";

            exec(cmd, function(error, stdout, stderr) {
                return callback(error, doc);
            })
        });
    }
}
