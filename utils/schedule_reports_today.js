#!/usr/bin/env node

console.log(
    "WARNING: this script doesn't currenty work! Perhaps I'm misunderstanding" +
    "the schedule document structure..."
);

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
    // no _rev so we only create doc if one doesn't already exist
    var schedule_doc = {
        _id: 'schedule_' + report,
        class: 'entry',
        collection: 'schedule',
        doc_collection: 'reports',
        date_scheduled: moment().toString()
    };
    couchr.post(dburl, schedule_doc, function (err) {
        if (err) {
            // log errors and continue processing
            console.error('Error creating schedule doc for: ' + report);
            console.error(err);
        }
        else {
            console.log('Created schedule doc for: ' + report);
        }
        return cb();
    });
},
function (err) {
    if (err) {
        console.error(err);
    }
});
