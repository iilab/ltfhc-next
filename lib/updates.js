var templates = require('duality/templates'),
    events = require('duality/events'),
    dutils = require('duality/utils'),
    ksutils = require('./utils'),
    utils = require('kujua-utils'),
    appinfo = require('./appinfo'),
    _ = require('underscore'),
    schema = require('lib/schema'),
    moment = require('moment');

exports.patient = function(doc, req) {
    events.once('afterResponse', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "success",
            body: "The patient's data has been saved"
        }));

        utils.updateTopNav('patient', "Patient");

        var alpaca_options = {
            "schemaSource": "patient.json",
            "optionsSource": "patient.json",
            "postRender": function() {
                $("#patient #patient-form #form").show()
                $('#loader').hide();
            },
            "ui": "bootstrap"
        }

        //console.log(doc)
        alpaca_options.data = doc
        $("#patient #patient-form #form").alpaca(alpaca_options).hide();
        $('#loader').show();
    })

    events.once('updateFailure', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "warning",
            body: "Error when attempting to save the patient's data"
        }));
    })

    if (!doc) {
        doc = {
            _id: req.uuid,
            class: "entry",
            schema: "http://ltfhc.iilab.org/schema/0.4.0/patient.json",
            collection: "patients",
            date_created: new Date().toISOString(),
        }
    } else {				
        doc.date_updated = new Date().toISOString();
    }

    var date_fields= Array() 

    var form = _.chain(req.form)
                .map(function (value, key) { return {value: value, key: key} })
                .filter(function (item) { return (item.value !== "") && (item.key != "_submit") && (doc[item.key] != item.value) })
                .value()

    submitted_date_fields = _.chain(form)
                             .filter(function (item) { return ((item.key.indexOf("date_") == 0) || (item.key.indexOf("current_") == 0))})
                             .value()

    _.each(form, function (item) { // copy to doc submitted value from form at same key except date fields (date_ or current_)
        if (!(_.contains(_.pluck(submitted_date_fields, "key"), item.key))) doc[item.key] = item.value
    })

    submitted_dates = _.chain(submitted_date_fields)
                       .reduce(function (memo, item) {
                           var m = {}, n = {}
                           n[item.key.split("_")[0]] = item.key
                           if (memo[item.key.split("_")[1]]) {
                               m = _.extend(memo[item.key.split("_")[1]], n)
                           } else {
                               m[item.key.split("_")[1]] = n
                           }
                           return _.extend(memo,  m)
                       }, {})
                       .value()

    // get date fields from the patient schema that relate to submitted date fields
    schema_date_fields = _.chain(schema.load('forms/schema/patient').properties)
                          .map(function (value, key) { return {value: value, key: key}})
                          .filter(function (item) { 
                              return (_.contains(_.keys(submitted_dates), item.key.split("_")[1]))
                          })
                          .value()

    schema_date_periods = _.chain(schema_date_fields)
                           .reduce(function (memo, item) {
                               var m = {}, n = {}
                               if (item.key.split("_")[0] === "current") {
                                   n[item.key.split("_")[2]] = item.key
                                   if (memo[item.key.split("_")[1]]) {
                                       m = _.extend(memo[item.key.split("_")[1]], n)
                                   } else {
                                       m[item.key.split("_")[1]] = n
                                   }
                                   memo = _.extend(memo, m)
                               }
                               return memo
                           }, {})
                           .value()


  	// update and schedule date variables
   
    _.each(submitted_dates, function (value, key){
        if (value.date) {
            var date = _.chain(form).reduce(function(o, i) { o[i.key] = i.value; return o }, {}).value()[value.date]
            
            _.chain(schema_date_periods[key])
             .map(function (value, key) { return {value: value, key: key}})
             .each(function (item) {
                 doc = ksutils.updateCurrent(doc, "patients", date, item.value.split("_")[1], item.key)
             })
             
            doc["date_" + key] = date 

        } else if (value.current) {
            var current = _.chain(form).reduce(function(o, i) { o[i.key] = i.value; return o }, {}).value()[value.current]
            doc = ksutils.updateDate(doc, "patients", current, value.current.split("_")[1], value.current.split("_")[2])
            
            _.chain(schema_date_periods[key])
             .map(function (value, key) { return {value: value, key: key}})
             .each(function (item) {
                 var date = doc["date_" + item.value.split("_")[1]]
                 doc = ksutils.updateCurrent(doc, "patients", date, item.value.split("_")[1], item.key)
             })
       }
    })                          

    var submit = req.form._submit

    if (submit == "save_visit") {
        return [doc, dutils.redirect(req, '/visit/' + doc._id)];
    } else {
        return [doc, dutils.redirect(req, '/patient/' + doc._id + '?reload=true')];
    }
};

exports.visit = function(doc, req) {
    events.once('afterResponse', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "success",
            body: "The visit's data has been saved"
        }));
    })

    events.once('updateFailure', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "warning",
            body: "Error when attempting to save the visit's data"
        }));
    })


    if (!doc) {
        doc = {
            _id: req.uuid,
            class: "entry",
            schema: "http://ltfhc.iilab.org/schema/0.4.0/visit.json",
            collection: "visits",
            date_created: new Date().toISOString(),
            patient_id: req.query.patient_id
        }
    } else {
        doc.date_updated = new Date().toISOString();
    }

    var db = require('db').use(ksutils.getDBURL())

    db.getDoc(req.query.patient_id, function(err, data) { // include current patient data inside the visit object.
        doc.patient = data
    })

    var formdata = JSON.parse(req.form._formdata)
    for (var k in formdata) {
//        console.log("k:" + k + "/ formdata[k]:" + formdata[k])
        if (k != "_formdata" && formdata[k] != "-1" && formdata[k] != [] && k.indexOf("subforms_") == -1) {
            if (k == "subforms") {
                for (var l in formdata[k]) {
                    if (typeof formdata[k][l] === "object") {
                        for (var m in formdata[k][l]) {
//                            console.log("k:" + k + " / l:" + l + " / m:" + m + " / formdata[k][l][m]:" + formdata[k][l][m])
                            if (formdata[k][l][m] != -1 && formdata[k][l][m].length != 0) { // skip empty number fields and empty multiples/arrays
                                if (typeof doc[k] === "undefined") doc[k] = formdata[k]
                                if (typeof doc[k][l] === "undefined") doc[k][l] = formdata[k][l]
                                doc[k][l][m] = formdata[k][l][m]
                            }
                        }
                    } else {
                        doc[k][l] = formdata[k][l]
                    }
                }
            } else {
                doc[k] = formdata[k] // copy to doc submitted value from form at same key.
            }
        }
    }

	// update and schedule date variables
    _.each(doc, function (e, k) {
        if (k.indexOf('current_') == 0) {
            doc = ksutils.updateDate(doc, k.split("_")[1], k.split("_")[2])
        }
    })
	
  //redirects to visits
    return [doc, dutils.redirect(req, '/visits')];

};

exports.schedule = function(doc,req) {
	return [doc, null]
}
