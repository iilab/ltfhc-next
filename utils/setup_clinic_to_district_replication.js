#!/usr/bin/env node

var couchr = require('couchr');
var path = require('path');

var args = process.argv.slice(2);
if (args.length !== 3) {
    console.error(
        'Usage: %s COUCH_URL CLINIC_DB DISTRICT_DB',
        path.basename(__filename)
    );
    return process.exit(1);
}

var couch_url = args[0];
var clinic_db = args[1];
var district_db = args[2];

var doc = {
    _id: clinic_db + '_reports_to_' + district_db,
    source: clinic_db,
    target: district_db,
    filter:"emr/approved_reports",
    continuous: true,
    user_ctx: {
        name: null,
        roles: ["_admin"]
    }
};
couchr.post(couch_url + '/_replicator', doc, function (err, res) {
    if (err) {
        return console.error(err);
    }
    console.log('Replicator doc created: ' + res.id);
});
