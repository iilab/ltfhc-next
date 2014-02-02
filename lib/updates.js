var 	templates = require('duality/templates'),
			events = require('duality/events'),
			dutils = require('duality/utils')

exports.in_place = function(doc, req) {
	doc.field = req.form.field.new_value;

	return [doc, toJSON(doc)];
}

exports.patient = function(doc, req) {
	events.once('afterResponse', function() {
		console.log("Hello!")
		$('.page-header .alerts').html(templates.render('alert.html', {}, {
			type: "success",
			title: "Info",
			body: "The patient's data has been saved"
		}));
	})

	events.once('updateFailure', function() {
		$('.page-header .alerts').html(templates.render('alert.html', {}, {
			type: "warning",
			title: "Warning",
			body: "Error when attempting to Save the patient's data"
		}));
	})
	
	for (var k in req.form) {
		doc[k] = req.form[k] // copy to doc submitted value from form at same key.
	}
	
	doc.date_updated = new Date().toISOString();


	return [doc, dutils.redirect(req, '/patient/' + doc._id)];

};
