exports.docs_by_collection = {
    map: function(doc) {
        if (doc.collection) {
            emit(doc.collection, null);
        }
    }
};

exports.reports = {
    map: function (doc) {
        if (doc.collection === 'reports' && doc.class == 'entry') {

            emit(
                [doc.collection], {
                    date: doc.date_created
                }
            );
        }
    }
};

exports.reports_calculated = {
	map: function(doc) {
		
		
		var reports_schema = require("views/lib/reports_schema")
		var reports = reports_schema.reports()
		
		var bucket = "",
			indicator;
		
		var prettyException = function (e) {
			var res = ""; 
			for (var prop in e) {
				res += "property: "+ prop+ " value: ["+ e[prop]+ "]\n"; 
			} 
			res += "toString(): " + " value: [" + e.toString() + "]";
			return res;
		}
			
		if (doc.collection == 'visits' && doc.class == 'entry') {
			
			for (report in reports) { // for each document loop over all reports available 
				// the document has a subform corresponding to this report. 
				// this prevents reports that reference variables from several subforms). 
				// anc matches both anc_first_visit and anc_follow_up
				var matches = {
					report_anc: ["anc_first_visit", "anc_followup"],
					report_childgrowth: ["well_child_visit"],
					report_contraceptive: ["reproductive_counseling"],
					report_dtc: ["diarrhea"],
					report_ipd: ["disease_diagnosis"],
					report_leprosy: ["tb_leprosy"],
					report_motherchildward: ["postnatal", "hiv_pregnancy_clinic", "well_child_visit"],
					report_opd: ["disease_diagnosis"],
					report_postnatal: ["postnatal"]
				}
				if (doc.reasons.filter(function (n) { return matches[report].indexOf(n) != -1}).length!=0) {
				//if (~doc.reasons.join(" ").indexOf(report.split("report_")[1].concat("_"))) {
					for (indicator in reports[report].properties) {
						// indicator condition is javascript that is evaluated here.
						cdtn = reports[report].properties[indicator].condition
						if (cdtn && reports[report].properties[indicator].line_number) {
							try {
								with(doc){
									var result = eval('(' + cdtn + ')')
									if (typeof result === "undefined" || result === null) { 
										emit([ "error", "", "", "", "", "", "", report, "line_condition_result", indicator, "condition result null or undefined: " + cdtn ],{})																
									} else {
										if (result) {
											var line_num = reports[report].properties[indicator].line_number.split(/(\d*)/)
											for (var col in reports[report].definitions.columns) {
												// columns condition is javascript that is evaluated here into bucket variable
												cdtn = reports[report].definitions.columns[col].condition
												if (cdtn) {
													try {
														with(doc) { //with block so that the condition evaluates with the document as "root" scope.
															var result = eval('(' + cdtn + ')')
															if (typeof result === "undefined" || result === null) { 
																emit([ "error", "", "", "", "", "", "", report, "column_condition_result" , col, "column condition result null or undefined: " + cdtn ],{})																
															} else {
																if (result) { // column cdtn evaluation is truthy
																	//emit(["error", report, "info", col, "bucket assignment:" + cdtn])
																	bucket = col;
																	emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report,  parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, bucket, result ], { bucket: bucket})										
																}
															}
														}
													} catch (e) {
														if (e instanceof SyntaxError) {
	  				    								emit([ "error", "", "", "", "", "", "", report, "column_condition", indicator, "syntax error in report in condition: " + cdtn + ". Exception: " + prettyException(e)],{})
															} else
															{
														  	var vDebug = ""; 
														    for (var prop in e) 
														    {  
														       vDebug += "property: "+ prop+ " value: ["+ err[prop]+ "]\n"; 
														    } 
																vDebug += "toString(): " + " value: [" + err.toString() + "]";
						    								emit([ "error", "", "", "", "", "", "", report, "column_condition", indicator, "error in condition: " + cdtn + ". Exception: " + prettyException(e) ],{})	
															}
													}
												} else {
													emit([ "error", "", "", "", "", "", "error", report, "column_condition", col, "column missing a condition field"],{})
												}
											}
										}
									}
								}
							} catch (e) {
								if (e instanceof SyntaxError) {
	    								emit([ "error", "", "", "", "", "", "", report, "line_condition", indicator, "syntax error in report in condition: " + cdtn + ". Exception: " + prettyException(e) ],{})
									} else
									{
	    								emit([ "error", "", "", "", "", "", "", report, "line_condition", indicator, "error in condition: " + cdtn + ". Exception: " + prettyException(e)  ],{})	
									}
							}
					    } else if (indicator == "definitions") {
							//break // columns, dealt with in the loop above
					    } else if (typeof cdtn === "undefined" || cdtn === null) {
							if (reports[report].properties[indicator].line_number != null && reports[report].properties[indicator].en != null ) {
								// header line
								var line_num = reports[report].properties[indicator].line_number.split(/(\d*)/)
								emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report, parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "header", "" ], { bucket: "header"})	
							} else {
								emit([ "error", "", "", "", "", "", "", report, "line", indicator, "line number or language label not defined"],{})						
							}			
						} else
						{
							emit([ "error", "", "", "", "", "", "", report, "unknown", indicator, "unknown error"],{})						
					    }
					} 
				} // end for loop on indicators
			} // end if report's subform is not in doc.
		} // end for loop on reports
	},
	reduce: function(keys, values, rereduce) {
		if (rereduce) { //attempt at writing rereduce
			var result = {}
			for (var i = 0; i < values.length; i++) {
				for (var key in values[i]) {
					result[key] = 0
				}
			}
			for (var i = 0; i < values.length; i++) {
				for (var key in values[i]) {
					result[key] = result[key] + values[i][key]
				}
			}
			return result;
		} else {
			var result = {}
			for (var idx in values) {
				if (values[idx] ) result[values[idx].bucket] = 0
			}
			for (var idx in values) {
				if (values[idx] ) result[values[idx].bucket] += values[idx] ? 1 : 0
			}
			return result
		}
	}
};

exports.reports_fields = {
    map: function(doc) {
        var bucket = "",
            indicator = "";

        if (doc.collection == 'reports' && doc.class == 'schema') {
            for (var prop in doc.properties) {
                var name = doc.properties[prop].field && doc.properties[prop].field.name
                var type = doc.properties[prop].field && doc.properties[prop].field.type
                var operation = doc.properties[prop].field && doc.properties[prop].field.operation
                if (name) emit([name, prop, type, operation])
            }
        }
    },
    reduce: "_count"
};

exports.visits = {
    map: function(doc) {
        if (doc.collection === 'visits' &&
            doc.class == 'entry') {

            var phone = doc.contact && doc.contact.phone,
                rc_code = doc.contact && doc.contact.rc_code;
            emit(doc.date_created.split("T")[0].split("-").concat([doc.patient.lastname,doc.patient.firstname]), doc);
        }
    }
};

exports.visits_list = {
    map: function(doc) {
        if (doc.collection === 'visits' &&
            doc.class == 'entry') {

            emit(doc.date_created.split("T")[0].split("-").concat([doc.patient.lastname,doc.patient.firstname]), {
                date_created: doc.date_created,
				firstname: doc.patient.firstname,
				lastname: doc.patient.lastname,
                clinicid: doc.clinicid
			});
        }
    }
};

exports.patients = {
    map: function(doc) {
        if (doc.collection === 'patients' &&
            doc.class == 'entry') {

            emit(
                [doc.first_name, doc.last_name], {
                    patient_id: doc._id,
                    first_name: doc.first_name,
                    last_name: doc.last_name,
                    clinic_id: doc.clinic_id,
                    government_id: doc.government_id,
                    hiv_id: doc.hiv_id,
                    phone: doc.phone,
                    approximate_age: doc.approximate_age,
                    village: doc.village,
                    district: doc.district
                }
            );
        }
    }
};

exports.facilities = {
    map: function(doc) {
        if (doc.type === 'clinic' ||
            doc.type === 'health_center' ||
            doc.type === 'district_hospital' ||
            doc.type === 'national_office') {

            var phone = doc.contact && doc.contact.phone,
                rc_code = doc.contact && doc.contact.rc_code;
            emit(
                [doc.type], {
                    name: doc.name,
                    contact: doc.contact,
                    rc_code: rc_code,
                    phone: phone
                }
            );
        }
    }
};

exports.facilities_by_district = {
    map: function(doc) {

        var dh_id = null;

        if (doc.type === 'clinic' && doc.parent && doc.parent.parent) {
            dh_id = doc.parent.parent._id;
        } else if (doc.type === 'health_center' && doc.parent) {
            dh_id = doc.parent._id;
        } else if (doc.type === 'district_hospital') {
            dh_id = doc._id;
        }
        if (dh_id !== null) {
            var phone = doc.contact && doc.contact.phone,
                rc_code = doc.contact && doc.contact.rc_code;
            emit(
                [dh_id, doc.type], {
                    name: doc.name,
                    contact: doc.contact,
                    rc_code: rc_code,
                    phone: phone
                }
            );
        }
    }
};

exports.reminders = {
    map: function(doc) {
        var phone,
            refid,
            tasks,
            dh_id = doc.related_entities && doc.related_entities.clinic && doc.related_entities.clinic.parent &&
                doc.related_entities.clinic.parent.parent && doc.related_entities.clinic.parent.parent._id;

        if (doc.type === 'data_record' && doc.form && doc.week_number && doc.year) {
            phone = doc.related_entities && doc.related_entities.clinic && doc.related_entities.clinic.contact &&
                doc.related_entities.clinic.contact.phone;
            refid = doc.related_entities && doc.related_entities.clinic && doc.related_entities.clinic.contact &&
                doc.related_entities.clinic.contact.rc_code;
            if (phone || (refid && refid !== null)) {
                emit([dh_id, doc.year, doc.week_number, phone, refid], 'report received');
            }
        } else if (doc.type === 'weekly_reminder' && doc.related_form && doc.week && doc.year && doc.phone) {
            tasks = doc.tasks;
            state = tasks.length ? tasks[0].state : 'unknown';
            emit([dh_id, doc.year, doc.week, doc.phone, doc.refid], 'reminder ' + state);
        }
    },
    reduce: function(keys, values) {
        return values.reduce(function(memo, value) {
            if (memo === 'report received') {
                return memo;
            } else if (memo === 'reminder sent') {
                return memo;
            } else {
                return value;
            }
        }, 'unknown');
    }
}

exports.contacts_by_id = {
    map: function(doc) {
        var district,
            facility;

        if (~['district_hospital', 'health_center', 'clinic'].indexOf(doc.type)) {
            emit([null, doc._id], null);
        }

        if (doc.type === 'district_hospital') {
            emit([doc._id, doc._id], null);
        } else if (doc.type === 'health_center') {
            district = doc.parent;

            if (district) {
                emit([district._id, doc._id], null);
            }
        } else if (doc.type === 'clinic') {
            facility = doc.parent;
            if (facility) {
                emit([facility._id, doc._id], null);

                district = facility.parent;
                if (district) {
                    emit([district._id, doc._id], null);
                }
            }
        }
    }
};

/*
 * Get facility based on phone number
 */

exports.facility_by_phone = {
    map: function(doc) {
        if (doc.contact && doc.type) {
            if (doc.type === 'clinic') {
                emit([doc.contact.phone, 'clinic'], doc);
            } else if (doc.type === 'health_center') {
                emit([doc.contact.phone, 'health_center'], doc);
            } else if (doc.type === 'district_hospital') {
                emit([doc.contact.phone, 'district_hospital'], doc);
            }
        }
    }
};

exports.facility_by_parent = {
    map: function(doc) {
        if (doc.type === 'clinic' || doc.type === 'health_center' || doc.type === 'district_hospital') {
            emit([doc.parent._id, doc.name, doc.type], true);
        }
    }
};

/*
 * Get clinic based on phone number
 */
exports.clinic_by_phone = {
    map: function(doc) {
        if (doc.type === 'clinic' && doc.contact) {
            emit([doc.contact.phone], doc);
        }
    }
};


exports.tasks_pending = {
    map: function(doc) {
        var has_pending,
            tasks = doc.tasks || [],
            scheduled_tasks = doc.scheduled_tasks || [];

        /*
         * Required fields for message to be processed:
         *  task `state` value must be 'pending'
         *  message needs the `to` and `message` properties
         */

        function hasPending(tasks) {
            var has = false,
                tasks = tasks || [];
            tasks.forEach(function(task) {
                if (task && task.state === 'pending') {
                    task.messages.forEach(function(msg) {
                        if (msg && msg.to && msg.message) {
                            has = true;
                        }
                    });
                }
            });
            return has;
        }

        // check tasks
        has_pending = hasPending(doc.tasks);

        // if still not pending check scheduled_tasks too.  also, only process
        // scheduled tasks if doc has no errors.
        if (!has_pending && (!doc.errors || doc.errors.length === 0)) {
            has_pending = hasPending(doc.scheduled_tasks);
        }

        if (has_pending) {
            emit([doc.reported_date, doc.refid]);
        }
    }
};

exports.tasks_sent = {
    map: function(doc) {
        var has_sent,
            tasks = doc.tasks || [],
            scheduled_tasks = doc.scheduled_tasks || [];

        has_sent = tasks.some(function(task) {
            return task.state === 'sent';
        });

        // check scheduled tasks too if not already sent
        if (!has_sent) {
            has_sent = scheduled_tasks.some(function(task) {
                return task.state === 'sent';
            });
        }

        if (has_sent) {
            emit([doc.reported_date, doc.refid]);
        }
    }
};

exports.data_record_by_year_month_and_clinic_id = {
    map: function(doc) {
        if (doc.type === 'data_record' && doc.related_entities && doc.related_entities.clinic) {
            emit([doc.year, doc.month, doc.related_entities.clinic._id], doc);
        }
    }
};

/*
 * Emit the sms_message.sent_timestamp string as created by gateway.
 */
exports.sms_message_by_sent_timestamp = {
    map: function(doc) {
        if (doc.type === 'data_record') {
            var sms = doc.sms_message;
            if (sms) {
                emit([sms.sent_timestamp, sms.form, sms.from], null);
            }
        }
    }
};

// Emit lists
exports.view_list = {
    map: function(doc) {
        if (doc.class === 'lists') {
            emit(
                doc.collection, {
                    order: doc.order,
                    name: doc.en
                });
        }
    }
};
