var templates = require('duality/templates'),
    events = require('duality/events'),
    dutils = require('duality/utils'),
    ksutils = require('./utils'),
    utils = require('kujua-utils'),
    appinfo = require('./appinfo'),
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
						current_age: 0
        }
    } else {				
        doc.date_updated = new Date().toISOString();
    }

    for (var k in req.form) { // copy to doc submitted value from form at same key.
        if (k != "_submit") { // except special hidden field _submit holding clicked submit button value.
            doc[k] = req.form[k]
        }
    }

    var submit = req.form._submit

		// update age
		if (doc.date_age) { 
			doc.current_age = updateDate(doc._id, doc.date_age, 'years')
			if (doc.approximate_age) { // a birthday and an approximate age -> consider that approximate age should be current_age
				doc.approximate_age = doc.current_age
			}
		}	else if (doc.approximate_age) { // only an approximate age
			  doc.date_age = moment().subtract('years', doc.approximate_age).toJSON().split("T")[0] // set birthday to current date minus approximate age.
				doc.approximate_age = updateDate(doc._id, doc.date_age, 'years')
				doc.current_age = doc.approximate_age
		} 

    if (submit == "save_visit") {
        return [doc, dutils.redirect(req, '/visit/' + doc._id)];
    } else {
						
	    var info = appinfo.getAppInfo.call(this, req);

	    return [doc, {
	        info: info,
	        title: info.translate('Patient'),
	        content: templates.render('patient.html', req, {})
	    }];
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

    var db = require('db').use(ksutils.getDBName())

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

		// visit date_create and date_updated are saved??

    return [doc, dutils.redirect(req, '/visit/' + req.query.patient_id + '/' + doc._id)];

};

exports.report = function(doc, req) {
    events.once('afterResponse', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "success",
            body: "The report's data has been saved"
        }));
    })

    events.once('updateFailure', function() {
        $('.page-header .alerts').html(templates.render('alert.html', {}, {
            type: "warning",
            body: "Error when attempting to save the report's data"
        }));
    })

    if (!doc) {
        doc = {
            _id: req.uuid,
            class: "entry",
            schema: "http://ltfhc.iilab.org/schema/0.4.0/report.json",
            collection: "reports",
            date_created: new Date().toISOString()
        }
    } else {
        doc.date_updated = new Date().toISOString();
    }

    console.log(req)

    for (var k in req.form) { // copy to doc submitted value from form at same key.
        if (k != "_submit") { // except special hidden field _submit holding clicked submit button value.
            doc[k] = req.form[k]
        }
    }

    return [doc, dutils.redirect(req, '/report/' + doc._id)];

};

exports.schedule = function(doc,req) {
	return [doc, null]
}

var updateDate = function(id, date_value, period) {

	console.log("id:" + id + "/value:" + date_value + "/period:" + period)

	var db = require('db').use(ksutils.getDBName());
	// period_in_days:
	//   year : 365.24.25
	//   month : 
	//   
	// We need a convention for date fields. e.g.
	// 
	// date_field: date_pregnancy
	// current_field: current_pregnancy_weeks (i.e. current_{fieldname}_{period})
	// 
	// date_field: date_age_birthday
	// current_field: current_age_year
	// current_field: current_age_months
	//
	
	var now = moment();
	var date = moment(date_value)
	var current = now.diff(date, period)
	date_scheduled = date.clone().add(period,current)
	
	db.newUUID( function(err, uuid) {

		var doc = {
			_id: uuid,
			class: "entry",
			collection: "schedule",
			doc_scheduled: id,
			date_scheduled: date_scheduled, // schedule for next period.
			current_field: current
		}

		db.saveDoc(doc, function(err, response) {
			return
		})
	})
	
	console.log("current:" + current)		
	return current;
	
}
