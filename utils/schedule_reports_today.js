#!/usr/bin/env node

var async = require('async');
var couchr = require('couchr');
var moment = require('moment');
var path = require('path');

var args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: %s DB_URL', path.basename(__filename));
    return process.exit(1);
}

var dburl = args[0];
var reports = require('../views/lib/reports_schema').reports();
var report_names = Object.keys(reports);

async.forEachSeries(report_names, function (report, cb) {
    var docurl = dburl + '/schedule_' + report;
    couchr.get(docurl, {}, function (err, doc) {
        if (err && err.error === 'not_found') {
            doc = {
                _id: 'schedule_' + report,
                class: 'entry',
                collection: 'schedule',
                doc_collection: 'reports'
            };
        }
        doc.date_scheduled = moment().toISOString();
        couchr.put(docurl, doc, function (err) {
            if (err) {
                // log errors and continue processing
                console.error('Error updating schedule doc for: ' + report);
                console.error(err.error + ': ' + err.reason);
            }
            else {
                console.log('Updated schedule doc for: ' + report);
            }
            return cb();
        });
    });
},
function (err) {
    if (err) {
        console.error(err);
    }
});
