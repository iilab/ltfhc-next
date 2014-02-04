var 	templates = require('duality/templates'),
			events = require('duality/events'),
			dutils = require('duality/utils')

exports.patient = function(doc, req) {
	events.once('afterResponse', function() {
		$('.page-header .alerts').html(templates.render('alert.html', {}, {
			type: "success",
			body: "The patient's data has been saved"
		}));
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
			date_created: new Date().toISOString()
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

	if (submit == "save_visit") {
		return [doc, dutils.redirect(req, '/visit/' + doc._id)];
	}
	else {
		return [doc, dutils.redirect(req, '/patient/' + doc._id)];
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
	
	var db = require('db').current()
	
	db.getDoc(req.query.patient_id, function(err, data) { // include current patient data inside the visit object.
		doc.patient = data
	})
	
	var formdata = JSON.parse(req.form._formdata)
	for (var k in formdata) {
		console.log("k:" + k + "/ formdata[k]:" + formdata[k])
		if (k != "_formdata" && formdata[k] != "-1" && formdata[k] != [] && k.indexOf("subforms_") == -1) { 
			if (k == "subforms") {
				for (var l in formdata[k]) {
					if (typeof formdata[k][l] === "object") {
						for (var m in formdata[k][l]) {
							console.log("k:" + k + " / l:" + l + " / m:" + m + " / formdata[k][l][m]:" + formdata[k][l][m])
							if (formdata[k][l][m] != -1 && formdata[k][l][m].length != 0) { // skip empty number fields and empty multiples/arrays
								doc[k][l][m] = formdata[k][l][m]
							}
						}
					}	else {
						doc[k][l] = formdata[k][l]
					}
				}
			} else {
				doc[k] = formdata[k] // copy to doc submitted value from form at same key.
			}
		}
	}
	
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

	for (var k in req.form) { // copy to doc submitted value from form at same key.
		if (k != "_submit") { // except special hidden field _submit holding clicked submit button value.
			doc[k] = req.form[k]
		} 
	}
	
	var submit = req.form._submit 

	if (submit == "save_visit") {
		return [doc, dutils.redirect(req, '/visit/' + doc._id)];
	}
	else {
		return [doc, dutils.redirect(req, '/patient/' + doc._id)];
	}

};