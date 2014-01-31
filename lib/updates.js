exports.in_place = function (doc, req) {
       doc.field = req.form.field.new_value;
 
       return [doc, toJSON(doc)];
   }

exports.patient_update = function(doc, req) {
	events.once('afterResponse', function() {

		utils.updateTopNav('patients', null);

		setupContext(req, function(err) {
			if (err) {
				console.error('setupContext error', err);
			}
			var db = require('db').current(),
				q = {
					include_docs: true
				};

			db.getDoc(req.query["_id"], q, function(err, data) {
				if (err) {
					return logger.error(err);
				}
				$('#loader').hide();

				var alpaca_options = {
					"schemaSource": "patient.json",
					"optionsSource": "patient.json",
					"postRender": function(control)
					    {
					        var cancelButton = $("<button id='patient-action' class='btn btn-lg btn-default' type='submit' value='cancel' onclick='history.go(-1);'>Cancel</button>");
					        var submitButton = $("<button id='patient-action' class='btn btn-lg btn-info' type='submit' value='save'>Save</button>");
					        var submitStartVisitButton = $("<button id='patient-action' class='btn btn-lg btn-primary pull-right' type='submit' value='save_visit'>Save and Start Visit</button>");
					        control.getEl().append(cancelButton);
					        control.getEl().append(submitButton);
					        control.getEl().append(submitStartVisitButton);

							$("#patient-action[value='save']").click(function(_ev) {								
								var docdata = control.getValue();	
								docdata._id = data._id
								docdata._id = data._rev							
								console.log(docdata)
								db.saveDoc(docdata, function(errsave, datasave) {
						            if (errsave) return alert('Save failed. ' + errsave);
						            if (!datasave.ok) return alert('Save failed.');
									console.log(datasave)
									return datasave
 								});
								return
							});
							
							$("#patient-action[value='save_visit']").click(function(_ev) {
								console.log("save_visit")
								return
							});
				
							$('#patient-form').submit(function(_ev) {
								_ev.stopPropagation();
								_ev.preventDefault();
							});
							
							return
							
					    },
					"ui": "bootstrap"
				}

				alpaca_options.data = data
				
				$("#patient #patient-form").alpaca(alpaca_options);
				
			});
		});
	});

	var props = {
		tab: {
			'districts': true
		}
	};

	var info = appinfo.getAppInfo.call(this, req);

	return {
		info: info,
		title: info.translate('Patient'),
		content: templates.render('patient.html', req, props)
	};
};
