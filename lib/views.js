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
            emit(doc.date_created.split("T")[0].split("-").concat([doc.report]), doc);
        }
    }
};

exports.reports_by_type_and_period_start = {
    map: function (doc) {
        if (doc.collection === 'reports' && doc.class == 'entry') {
            emit([doc.report].concat(doc.period.start), null);
        }
    }
};

exports.approved_reports_by_clinic = {
    map: function (doc) {
        if (doc.collection === 'reports' &&
            doc.class === 'entry' &&
            doc.status === 'Approved') {
            emit(
                [doc.clinic].concat(
                    doc.date_created.split("T")[0].split("-").concat(
                        [doc.report]
                    )
                ),
                doc
            );
        }
    }
};

exports.reports_calculated = {
	map: function(doc) {
		
		var DEBUG = false;
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
                    report_screening_1: ["__all__"],
                    report_screening_2: ["__all__"],
                    report_screening_3: ["__all__"],
                    report_screening_4: ["__all__"],
                    report_svv: ["sexual_violence_record", "disease_diagnosis", "reproductive_counseling", "bodily_injury", "ctc_record"],
					report_isthiv_1: ["anc_first_visit", "anc_followup", "reproductive_counseling"],
                    report_isthiv_2: ["anc_first_visit", "anc_followup", "reproductive_counseling", "hiv_counseling_mother"],
                    report_isthiv_3: ["anc_first_visit", "anc_followup"],
                    report_isthiv_4: ["anc_first_visit", "anc_followup"],
                    report_isthiv_5: ["anc_first_visit", "anc_followup"],
                    report_nci: ["disease_diagnosis"],
                    report_anc: ["anc_first_visit", "anc_followup"],
                    report_childvaccination_1: ["well_child_visit"],
                    report_childvaccination_2: ["well_child_visit"],
                    report_community_1: ["disease_diagnosis"],
                    report_community_2: ["disease_diagnosis"],
                    report_community_3: ["disease_diagnosis"],
                    report_community_4: ["disease_diagnosis"],
                    report_diagnosis_1: ["disease_diagnosis"],
                    report_diagnosis_2: ["disease_diagnosis"],
					report_epidemiological: ["disease_diagnosis"],
                    report_family: ["reproductive_counseling"],
                    report_familyplanning_1: ["reproductive_counseling"],
                    report_familyplanning_2: ["reproductive_counseling"],
                    report_labcare_1: ["disease_diagnosis"],
                    report_labcare_2: ["disease_diagnosis"],
                    report_labcare_3: ["disease_diagnosis"],
                    report_malaria: ["disease_diagnosis"],
                    report_malariacomplement: ["disease_diagnosis"],
                    report_monitoringvaccination_1: ["disease_diagnosis"],
                    report_monitoringvaccination_2: ["disease_diagnosis"],
                    report_monitoringvaccination_3: ["disease_diagnosis"],
                    report_mutual: ["disease_diagnosis"],
					report_ordervaccine: ["disease_diagnosis"],
                    report_pmtct: ["disease_diagnosis"],
                    report_postnatal_1: ["disease_diagnosis"],
                    report_postnatal_2: ["disease_diagnosis"],
                    report_pregnant_1: ["disease_diagnosis"],
                    report_pregnant_2: ["disease_diagnosis"],
                    report_pregnant_3: ["disease_diagnosis"],
                    report_pregnant_4: ["disease_diagnosis"],
                    report_pregnant_5: ["disease_diagnosis"],
                    report_pregnant_6: ["disease_diagnosis"],
                    report_preschool_1: ["disease_diagnosis"],
                    report_preschool_2: ["disease_diagnosis"],
                    report_preschool_3: ["disease_diagnosis"],
                    report_preschool_4: ["disease_diagnosis"],
                    report_preschool_5: ["disease_diagnosis"],
                    report_promo_1: ["disease_diagnosis"],
                    report_promo_2: ["disease_diagnosis"],
                    report_promo_3: ["disease_diagnosis"],
                    report_promo_4: ["disease_diagnosis"],
                    report_promo_5: ["disease_diagnosis"],
                    report_promo_6: ["disease_diagnosis"],
                    report_promo_7: ["disease_diagnosis"],
                    report_reprohealth_1: ["disease_diagnosis"],
                    report_reprohealth_2: ["disease_diagnosis"],
                    report_reprohealth_3: ["disease_diagnosis"],
                    report_reprohealth_4: ["disease_diagnosis"],
                    report_reprohealth_5: ["disease_diagnosis"],
                    report_reprohealth_6: ["disease_diagnosis"],
                    report_reprohealth_7: ["disease_diagnosis"],
                    report_reprohealth_8: ["disease_diagnosis"],
                    report_reprohealth_9: ["disease_diagnosis"],
                    report_reprohealth_10: ["disease_diagnosis"],
                    report_reprohealth_11: ["disease_diagnosis"],
                    report_reprohealth_12: ["disease_diagnosis"],
                    report_reprohealth_13: ["disease_diagnosis"],
                    report_resources_1: ["disease_diagnosis"],
                    report_resources_2: ["disease_diagnosis"],
                    report_resources_3: ["disease_diagnosis"],
                    report_resources_4: ["disease_diagnosis"],
                    report_resources_5: ["disease_diagnosis"],
                    report_resources_6: ["disease_diagnosis"],
                    report_resources_7: ["disease_diagnosis"],
                    report_resources_8: ["disease_diagnosis"],
                    report_resources_9: ["disease_diagnosis"],
                    report_resources_10: ["disease_diagnosis"],
                    report_resources_11: ["disease_diagnosis"],
                    report_resources_12: ["disease_diagnosis"],
                    report_resources_13: ["disease_diagnosis"],
                    report_resources_14: ["disease_diagnosis"],
                    report_resources_15: ["disease_diagnosis"],
                    report_resources_16: ["disease_diagnosis"],
                    report_resources_17: ["disease_diagnosis"],
                    report_resources_18: ["disease_diagnosis"],
                    report_summary: ["disease_diagnosis"],
                    report_supervision_1: ["disease_diagnosis"],
                    report_supervision_2: ["disease_diagnosis"],
                    report_vaccination: ["disease_diagnosis"],
                    report_vaccinationintrants: ["disease_diagnosis"],
					report_motherchildward: ["postnatal", "hiv_pregnancy_clinic", "well_child_visit"],
					report_opd: ["disease_diagnosis"],
					report_postnatal: ["postnatal"]
				}
                //if (true) {
                if (matches[report] === undefined) matches[report] = ["__all__"];
				if (DEBUG) emit(["log", report, "", doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "0. matching", matches[report],(matches[report][0] == "__all__"), ((doc.reasons.filter(function (n) { return matches[report].indexOf(n) != -1 }).length!=0) || (matches[report][0] == "__all__"))])
				if ((doc.reasons.filter(function (n) { return matches[report].indexOf(n) != -1 }).length!=0) || (matches[report][0] == "__all__")) {
				//if (~doc.reasons.join(" ").indexOf(report.split("report_")[1].concat("_"))) {
					for (indicator in reports[report].properties) {
						// indicator condition is javascript that is assigned to variable here and evaluated later in the with(doc) block.
						row_cdtns = reports[report].properties[indicator].condition
                        if (DEBUG) emit(["log", report, indicator, doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "1. matches"])
						// deal with wildcard 'subforms.*' pattern. 
                        var arr_cdtns = [];
                        if (row_cdtns.indexOf('subforms.*') !== -1) {
                            for (var key in doc.subforms) {
                                arr_cdtns.push(row_cdtns.replace(/subforms\.\*/g, 'subforms.' + key));
                            }
                        } else {
                            arr_cdtns[0] = row_cdtns
                        }
                        var row_result = false;
                        for (row_cdtn in arr_cdtns) {
                            if (arr_cdtns[row_cdtn] !== undefined && reports[report].properties[indicator].line_number) {
    							try {
    								with(doc){
    									var line_num = reports[report].properties[indicator].line_number.split(/(\d*)/)
                                        // indicator condition is javascript that is evaluated here.
                                        // the implicit logical link is 'or' between wildcard conditions.
                                        row_result = row_result || eval('(' + arr_cdtns[row_cdtn] + ')')
    									if (DEBUG) emit(["log", report, indicator, doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "2. line condition", arr_cdtns[row_cdtn], "row result", row_result])
    									if (row_result === null) { 
    										emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "line_condition_result", indicator, "condition result null or undefined: " + arr_cdtns[row_cdtn] ],{})																
    									} else {
    										if (row_result) {
    											for (var col in reports[report].definitions.columns) {
    												// columns condition is javascript that is assigned here into bucket variable and evaluted later.
                                                    col_cdtn = reports[report].definitions.columns[col].condition
                                                    if (col_cdtn) {
                                                        try {
                                                            // with(doc) { //with block so that the condition evaluates with the document as "root" scope.
                                                            // column condition is evaluated here.
    														var col_result = eval('(' + col_cdtn + ')');
                                                            if (DEBUG) emit(["log", report, indicator, doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "3. column", col, "condition result", col_result])
    														if (col_result === null) { 
    															emit([ "error", "", "", "", "", "", "", report, "column_condition_result" , col, "column condition result null or undefined: " + col_cdtn ],{})																
    														} else {
                                                                if (col_result) {
                                                                    // column cdtn evaluation is truthy
                                                                    // emit(["error", report, "info", col, "bucket assignment:" + cdtn])
                                                                    bucket = col;
                                                                    if (reports[report].properties[indicator].line == "singlecell") {
                                                                        emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report,  parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "singlecell", col_result ], { bucket: "singlecell"})    
                                                                    } else {
                                                                        // the 2015-02 report should count new patients in 2015-02 (i.e. current_created_month = 0).
                                                                        // in 2015-03 when the doc is updated to add 1 to current_created_month, then 
                                                                        // the 2015-03 report should NOT count patients in 2015-02 ( current_created_month = 1)  
                                                                        // but the 2015-02 report should STILL show the new patients in 2015-02. 
                                                                        // We're in 2015-03. A last month's visit still has the older patient record
                                                                        // with patient.date_created = 2015-02 and patient.current_created_date = 0.
                                                                        // Last month's visit is included only in last month's report (doc.date_created).
                                                                        // In last month's report, it shows the older patient record, with current_created_date =0
                                                                        // So if it gets recalculated, it will show as a new patient FOR LAST MONTH'S REPORT.
                                                                        // If I create a new visit, the patient attached, should have a patient.current_created_date of 1.
                                                                        // So it shouldn't show as a new patient.
                                                                        //
                                                                        // Therefore "new_cases" condition should be "true". Given that only the visits from the
                                                                        // period will be shown. 
                                                                        // "    "
                                                                        //for (var c = doc.patient.current_created_month, c<=0, c-- ) {
                                                                        //    var date_report = doc.patient.patient.
                                                                            // what if there is a formulat needing patient date 
                                                                            emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report,  parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, bucket, col_result ], { bucket: bucket})    
                                                                    }
                                                                } else {
                                                                    if (DEBUG) emit(["log", report, indicator, doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "3a. column catch emit all.", col])
                                                                    // if the column condition is false or undefined, still emit in the {all} key to display empty report lines.
                                                                    emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report, parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "all", col_result ], { bucket: "all"})  
                                                                }
                                                            }
                                                            // }
    													} catch (e) {
    														if (e instanceof SyntaxError) {
    	  				    								emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "col", col, "column_condition", col_cdtn, "Exception: " + prettyException(e)],{})
    															} else
    															{
    														  	var vDebug = ""; 
    														    for (var prop in e) 
    														    {  
    														       vDebug += "property: "+ prop+ " value: ["+ err[prop]+ "]\n"; 
    														    } 
    																vDebug += "toString(): " + " value: [" + err.toString() + "]";
    						    								emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "col", col, "column_condition", col_cdtn, "Exception: " + prettyException(e) ],{})	
    															}
    													}
    												} else {
    													emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "col", col, "column_condition", col_cdtn, "Column missing a condition field"],{})
    												}
    											}
    										} else {
                                                if (DEBUG) emit(["log", report, indicator, doc.reasons, doc.date_created.split("-")[0], doc.date_created.split("-")[1], "2a. row catch emit all."])
                                                // if the row condition is false or undefined, still emit in the {all} key to display empty report lines.
                                                emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report, parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "all", row_result ], { bucket: "all"})  
                                            }
    									}
    								}
    							} catch (e) {
    								if (e instanceof SyntaxError) {
    	    								emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "line_condition", arr_cdtns[row_cdtn], "Exception: " + prettyException(e) ],{})
    									} else if (e instanceof ReferenceError) {
                                            // if the doc property doesn't exist emit in the {all} key.
                                            emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report, parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "all", row_result ], { bucket: "all"})    
                                        } else {
    	    								emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "line_condition", arr_cdtns[row_cdtn], "Exception: " + prettyException(e)  ],{})	
    									}
    							}
    					    } else if (indicator == "definitions") {
    							//break // columns, dealt with in the loop above
    					    } else if (typeof arr_cdtns[row_cdtn] === "undefined" || arr_cdtns[row_cdtn] === null) {
    							if (reports[report].properties[indicator].line_number != null && reports[report].properties[indicator].en != null ) {
    								// header line
    								var line_num = reports[report].properties[indicator].line_number.split(/(\d*)/)
    								emit([doc.date_created.split("-")[0], doc.date_created.split("-")[1], report, parseInt(line_num[1]), line_num[2], indicator, reports[report].properties[indicator].en, "header", "" ], { bucket: "header"})	
    							} else {
    								emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "line", indicator, "line number or language label not defined"],{})						
    							}			
    						} else
    						{
    							emit([ "error", report, indicator, doc.reasons, doc.date_created.split("-")[0], "unknown", indicator, "unknown error"],{})						
    					    }
                        } // end for 'subforms.*' wildcard pattern.
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

exports.schedule = {
    map: function(doc) {
        if (doc.collection === 'schedule' &&
            doc.class == 'entry') {

            emit(doc.date_scheduled.split("T")[0].split("-").concat([doc.doc_collection, doc.doc_scheduled]), doc);
        }
    }
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
