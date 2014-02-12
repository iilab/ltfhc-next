var querystring = require('querystring'),
    db = require('db'),
    sha1 = require('sha1'),
    users = require('users'),
    events = require('duality/events'),
    dutils = require('duality/utils'),
    //    jsonforms  = require('views/lib/jsonforms'),
    //    objectpath  = require('views/lib/objectpath'),
    templates = require('duality/templates'),
    showdown = require('showdown'),
    sd = new showdown.converter(),
    utils = require('kujua-utils'),
    ksutils = require('./utils'),
    cookies = require('cookies'),
    url_util = require('url'),
    logger = utils.logger,
    jsDump = require('jsDump'),
    data_records = require('./data_records'),
    moment = require('moment'),
    _ = require('underscore'),
    _str = require('underscore-string'),
    //    async = require('async'),
    settings = require('settings/root'),
    appinfo = require('./appinfo'),
    ddoc = settings.name,
    district,
    isAdmin,
    isDistrictAdmin;

var cache = {};

var show_status = function(_elt, _err) {

    var status_elt = $(_elt);

    if (_err) {
        status_elt.text('Save Failed').addClass('error');
    } else {
        status_elt.text('Saved Successfully');
    }

    status_elt.fadeIn(100, function() {
        status_elt.delay(1000).fadeOut(1000, function() {
            status_elt.text('').show().removeClass('error');
        });
    });
};

exports.home = function(doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Home',
        content: templates.render('home.html', req, {
            nav: 'home'
        })
    };
};

exports.patients = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('patients', "Patients");

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            var db = require('db').use(ksutils.getDBName()),
                view = 'patients',
                lockRows = true,
                q = {
                    include_docs: true
                };

            renderPatientsControls(req);

            //var docs
            baseURL = require('duality/core').getBaseURL(req);

            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                var docs = _.map(data.rows, function(row) {
                    return row.doc;
                });
                /*for (var row in data.rows) {
					docs[row]=data.rows[row].doc
				}
				return*/

                var datatable_options = {
                    "oLanguage": {
                        "sLengthMenu": "_MENU_ patients per page",
                        "sInfo": "Showing _START_ to _END_ of _TOTAL_"
                    },
                    "sDom": "<'hide'f>t<'row'<'col-md-3'l><'col-md-3'i><'col-md-6'p>>",
                    "aLengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    "iDisplayLength": 10,
                    //"sPaginationType":"two_button",
                    "aoColumnDefs": [{
                        "aTargets": "_all", // Column to target
                        "sDefaultContent": ""
                    }, ],
                    "aoColumns": [{
                        "sTitle": "First Name",
                        "mData": "first_name"
                    }, {
                        "sTitle": "Last Name",
                        "mData": "last_name"
                    }, {
                        "sTitle": "Clinic Id",
                        "mData": "clinic_id"
                    }, {
                        "sTitle": "Government Id",
                        "sClass": "center",
                        "mData": "government_id"
                    }, {
                        "sTitle": "Hiv Id",
                        "sClass": "center",
                        "mData": "hiv_id"
                    }, {
                        "sTitle": "Phone",
                        "sClass": "center",
                        "mData": "phone"
                    }, {
                        "sTitle": "Approx Age",
                        "sClass": "center",
                        "mData": "approximate_age"
                    }, {
                        "sTitle": "Village",
                        "sClass": "center",
                        "mData": "village"
                    }, {
                        "sTitle": "District",
                        "sClass": "center",
                        "mData": "district"
                    }, {
                        "sTitle": "Edit",
                        "mData": "patient_id",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            return '<a class="btn btn-primary" href="' + baseURL + '/patient/' + full._id + '"><i class="icon icon-edit"> Patient</a>';
                        }
                    }]
                }
                datatable_options.aaData = docs

                oTable = $('#patients-table').dataTable(datatable_options);

                $('#loader').hide();
                $('[data-page=patients] #patients #patients-table').show();

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
        title: info.translate('Patients'),
        content: templates.render('patients.html', req, props)
    };
};

function updatePatientSearchControl(query) {
    var q = _.clone(query);
    $('#search-filter').show() //.find('form').attr('action', baseURL);
    $('#search-filter-input').keyup(function() {
        oTable.fnFilter($(this).val());
    })
    //	$('#search-filter .btn').off('click');
    //	$('#search-filter .btn').on('click', function(ev) {
    //		ev.preventDefault();
    //		$(ev.target).closest('form').submit();
    //	});
}

var renderPatientsControls = function(req) {

    baseURL = require('duality/core').getBaseURL(req);

    // gather query params.
    var q = {
        dh_id: req.query.dh_id,
        dh_name: req.query.dh_name,
        hc_id: req.query.hc_id,
        hc_name: req.query.hc_name,
        cl_id: req.query.cl_id,
        cl_name: req.query.cl_name,
        search: req.query.search
    };

    var noneLink = '<li><a href="' + baseURL + '/">Show All</a></li>';

    if (!isAdmin && !district) return;

    $('.page-header .controls').first().html(
        templates.render('patients_controls.html', req, {
            query: q
        })
    ).show();

    // add show all link
    $('.page-header .controls .records-filter')
        .find('.dropdown-menu').html(noneLink);

    // update controls that use caching
    updatePatientSearchControl(q);

};

function updateVisitsSearchControl(query) {
    var q = _.clone(query);
    $('#search-filter').show() //.find('form').attr('action', baseURL);
    $('#search-filter-input').keyup(function() {
        oTable.fnFilter($(this).val());
    })
    //	$('#search-filter .btn').off('click');
    //	$('#search-filter .btn').on('click', function(ev) {
    //		ev.preventDefault();
    //		$(ev.target).closest('form').submit();
    //	});
}

var renderVisitsControls = function(req) {

    baseURL = require('duality/core').getBaseURL(req);

    // gather query params.
    var q = {
        dh_id: req.query.dh_id,
        dh_name: req.query.dh_name,
        hc_id: req.query.hc_id,
        hc_name: req.query.hc_name,
        cl_id: req.query.cl_id,
        cl_name: req.query.cl_name,
        search: req.query.search
    };

    var noneLink = '<li><a href="' + baseURL + '/">Show All</a></li>';

    if (!isAdmin && !district) return;

    $('.page-header .controls').first().html(
        templates.render('visits_controls.html', req, {
            query: q
        })
    ).show();

    // add show all link
    $('.page-header .controls .records-filter')
        .find('.dropdown-menu').html(noneLink);

    // update controls that use caching
    updateVisitsSearchControl(q);

};

var bindButtonToValidationState = function(button, control)
{
    // helper - runs validation and redraws the UI
    var assertValidationState = function()
    {
        control.validate(true);
        control.renderValidationState(true);
    };
    // when the "validated" even is raised, enable the submit button
    control.on("validated", function(e) {
        $(button).prop("disabled", false);
    });
    // when the "invalidated" even is raised, disable the submit button
    control.on("invalidated", function(e) {
        $(button).prop("disabled", true);
    });
    // when the button is clicked, ensure validity before submitting
    $(button).click(function(e) {

        assertValidationState();

        // if control not valid, don't allow things to proceed
        if (!control.isValid())
        {
            e.preventDefault();
        }
    });
    // assert validity on initial load
    assertValidationState();
};


exports.patient = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('patient', "Patient");

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            var alpaca_options = {
                "schemaSource": "patient.json",
                "optionsSource": "patient.json",
                "postRender": function(control) {
                    $("#patient #patient-form #form").show()
                    $('#loader').hide();

                    // TODO: pick the submit button whose state is disabled or enabled based on the form's validity
                    var submitButton = $("#patient #patient-form button[type='submit']");
                    bindButtonToValidationState(submitButton, control);

                },
                "ui": "bootstrap"
            }

            //console.log(doc)
            alpaca_options.data = doc
            $("#patient #patient-form #form").alpaca(alpaca_options).hide();

        })
    })

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Patient'),
        content: templates.render('patient.html', req, {})
    };

}

exports.visit = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('visit', "Visit");

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            var alpaca_options = {
                "schemaSource": "visit.json",
                "optionsSource": "visit.json",
                "postRender": function(control) {
                    $("#visit #visit-form #form").show()
                    $('#loader').hide();
                    $("#visit #visit-form").submit(function(_ev) {
                        $("#form input[name=_formdata]").val(JSON.stringify(control.getValue()))
                    });

                    // TODO: pick the submit button whose state is disabled or enabled based on the form's validity
                    var submitButton = $("#visit #visit-form button[type='submit']");
                    bindButtonToValidationState(submitButton, control);

                },
                "ui": "bootstrap"
            }

            alpaca_options.data = doc

            $("#visit #visit-form #form").alpaca(alpaca_options).hide();

        });
    });

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Visit'),
        content: templates.render('visit.html', req, {
            nav: 'visits'
        })
    };
}

exports.visits = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('visits', "Visits");

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }

            var db = require('db').use(ksutils.getDBName()),
                view = 'visits',
                lockRows = true,
                q = {
                    include_docs: true
                };

            renderVisitsControls(req);

            //var docs
            baseURL = require('duality/core').getBaseURL(req);

            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                var docs = _.map(data.rows, function(row) {
                    return row.doc;
                });

                var datatable_options = {
                    "oLanguage": {
                        "sLengthMenu": "_MENU_ patients per page",
                        "sInfo": "Showing _START_ to _END_ of _TOTAL_"
                    },
                    "sDom": "<'hide'f>t<'row'<'col-md-3'l><'col-md-3'i><'col-md-6'p>>",
                    "aLengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    "iDisplayLength": 10,
                    //"sPaginationType":"two_button",
                    /*"aoColumnDefs": [
								{
									"aTargets": [ 1, 2 ,3, 4, 5, 6, 7], // Column to target
									"sDefaultContent": ""
								},					
					        ],*/
                    "aoColumnDefs": [{
                        "aTargets": "_all", // Column to target
                        "sDefaultContent": ""
                    }, ],
                    "aaSorting": [
                        [0, "desc"]
                    ],
                    "aoColumns": [{
                        "sTitle": "Visit Date",
                        "mData": "date_created",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            date = full.date_created.split("T")[0]
                            time = full.date_created.split("T")[1].split(".")[0]
                            return date + " " + time;
                        }
                    }, {
                        "sTitle": "First Name",
                        "mData": "patient.first_name"
                    }, {
                        "sTitle": "Last Name",
                        "mData": "patient.last_name"
                    }, {
                        "sTitle": "Clinic Id",
                        "mData": "patient.clinic_id"
                    }, {
                        "sTitle": "Government Id",
                        "sClass": "center",
                        "mData": "patient.government_id"
                    }, {
                        "sTitle": "Phone",
                        "sClass": "center",
                        "mData": "patient.phone"
                    }, {
                        "sTitle": "Approx Age",
                        "sClass": "center",
                        "mData": "patient.approximate_age"
                    }, {
                        "sTitle": "Edit",
                        "mData": "visit_id",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            return '<a class="btn btn-primary" href="' + baseURL + '/patient/' + full.patient_id + '"><i class="icon icon-user"> Patient</a>';
                        }
                    }, {
                        "sTitle": "Edit",
                        "mData": "visit_id",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            return '<a class="btn btn-primary" href="' + baseURL + '/visit/' + full.patient_id + "/" + full._id + '"><i class="icon icon-list"> Visit</a>';
                        }
                    }]
                }
                datatable_options.aaData = docs

                oTable = $('#visits-table').dataTable(datatable_options);

                $('#loader').hide();
                $('[data-page=visits] #visits #visits-table').show();

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
        title: info.translate('Visits'),
        content: templates.render('visits.html', req, props)
    };
};

exports.reports = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('reports');

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }

            // Reports should show
            //  - By default when loading, the list of reports that need to be approved (or edited and approved) - i.e. reports that have been saved automatically after the period closed. (as a document with collection="report" and class="entry")
            //  - Allow selection of ongoing (calculated for the current period) reports and approved (past) reports 
            //
            // reports_calculated are called when a user clicks on an report from an ongoing period.
            // 

            //renderReportsControls(req);

            //var docs
            var db = require('db').use(ksutils.getDBName()),
                view = 'reports',
                lockRows = true,
                q = {
                    include_docs: true
                };

            baseURL = require('duality/core').getBaseURL(req);

            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                var docs = _.map(data.rows, function(row) {
                    return row.doc;
                });

                var datatable_options = {
                    "oLanguage": {
                        "sLengthMenu": "_MENU_ Reports per page",
                        "sInfo": "Showing _START_ to _END_ of _TOTAL_"
                    },
                    "sDom": "<'hide'f>t<'row'<'col-md-3'l><'col-md-3'i><'col-md-6'p>>",
                    "aLengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ],
                    "iDisplayLength": 10,
                    //"sPaginationType":"two_button",
                    /*"aoColumnDefs": [
								{
									"aTargets": [ 1, 2 ,3, 4, 5, 6, 7], // Column to target
									"sDefaultContent": ""
								},					
					        ],*/
                    "aoColumnDefs": [{
                        "aTargets": "_all", // Column to target
                        "sDefaultContent": ""
                    }, ],
                    "aaSorting": [
                        [0, "desc"]
                    ],
                    "aoColumns": [{
                        "sTitle": "Report Updated",
                        "mData": "date_created",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            if (full.date_updated) {
                                date = full.date_updated.split("T")[0]
                                time = full.date_updated.split("T")[1].split(".")[0]
                            } else {
                                date = full.date_created.split("T")[0]
                                time = full.date_created.split("T")[1].split(".")[0]
                            }
                            return date + " " + time;
                        }
                    }, {
                        "sTitle": "Report Type",
                        "mData": "title"
                    }, {
                        "sTitle": "Report Period",
                        "mData": "period"
                    }, {
                        "sTitle": "Report Status",
                        "mData": "status",
                        "sDefaultContent": "Unapproved"
                    }, {
                        "sTitle": "Edit",
                        "mData": "visit_id",
                        "mRender": function(data, type, full) {
                            // 'full' is the row's data object, and 'data' is this column's data
                            // e.g. 'full[0]' is the comic id, and 'data' is the comic title
                            return '<a class="btn btn-primary" href="' + baseURL + '/report/' + full._id + '"><i class="icon icon-list"> Report</a>';
                        }
                    }]
                }
                datatable_options.aaData = docs

                oTable = $('#reports-table').dataTable(datatable_options);

                $('#loader').hide();
                $('[data-page=reports] #reports #reports-table').show();

            });


        });
    })

    var props = {
        tab: {
            'districts': true
        }
    };

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Reports'),
        content: templates.render('reports.html', req, props)
    };

}

var renderReportsControls = function(req) {

    baseURL = require('duality/core').getBaseURL(req);

    // gather query params.
    var q = {
        date: req.query.date,
        report: req.query.report,
        status: req.query.status
    };

    // TODO: Proper access control
    // if(!isAdmin && !district) return;

    $('.page-header .controls').first().html(
        templates.render('reports_controls.html', req, {
            query: q
        })
    ).show();

    // add show all link
    $('.page-header .controls .records-filter')
        .find('.dropdown-menu').html(noneLink);

    // update controls that use caching

};

exports.report = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('report');

        setupContext(req, function(err) {

            if (err) {
                console.error('setupContext error', err);
            }
            if (err) {
                return logger.error(err);
            }
            $('#loader').hide();

            var data = {}, rows = new Array()

                var saved_rows = _.chain(doc)
                .map(function(value, key) {
                    return {
                        value: value,
                        key: key
                    }
                })
                .filter(function(item) {
                    return (item.key.indexOf("|") != -1)
                })
                .reduce(function(memo, item) {
                    var n = {}, m = {}
                    n[item.key.split("|")[1]] = item.value
                    n.line_number = item.key.split("|")[2]
                    n.label = item.key.split("|")[3]
                    if (memo[item.key.split("|")[0]]) {
                        memo[item.key.split("|")[0]] = _.extend(memo[item.key.split("|")[0]], n)
                    } else {
                        m[item.key.split("|")[0]] = n
                        memo = _.extend(memo, m)
                    }
                    return memo
                }, {})
                .value()

            data.rows = saved_rows

            for (var i in data.rows) {
                rows[i] = data.rows[i];
                rows[i].indicator = i;
            }

            columns = [{
                label: $.kansotranslate('Line'),
                property: ['line_number'],
                type: 'label' // non-editable
            }, {
                label: $.kansotranslate('Indicator'),
                property: ['label'],
                type: 'key' // non-editable and contains the row's key in spreadsheet's data('key')
            }]

            var reports_schema = require("views/lib/reports_schema")
            var reports = reports_schema.reports()

            for (var col in reports[doc.report].definitions.columns) {
                var new_col = {}
                new_col.label = reports[doc.report].definitions.columns[col].title
                //new_col.property = new Array()
                //new_col.property.push(col)
                new_col.property = [col]
                new_col.type = 'field' // editable
                columns.push(new_col)
            }

            rows = _.values(rows)

            console.log(columns)
            console.log(rows)

            $('[data-page=report] #report_calculated #report-form #form').spreadsheet({
                columns: columns,
                data: rows
            });
            
            $('#report_calculated #report-name').text(doc.title + " - " + doc.period)        
            $('#report_calculated #report-form input[name=title]').val(doc.title)
            $('#report_calculated #report-form input[name=period]').val(doc.period)
            
        });
    });

    var props = {
        report: doc.report
    };

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Report'),
        content: templates.render('report_calculated.html', req, props)
    };
};

exports.report_calculated = function(doc, req) {
    var reports_schema = require("views/lib/reports_schema")
    var reports = reports_schema.reports()

    var columns = new Array()
    
    events.once('afterResponse', function() {

        utils.updateTopNav('report_calculated');

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            var db = require('db').use(ksutils.getDBName()),
                view = 'reports_calculated',
                q = {
                    startkey: moment().format("YYYY-MM").split("-").concat([req.query["report"]]),
                    endkey: moment().format("YYYY-MM").split("-").concat([req.query["report"]], {}),
                    group_level: 7,
                    //					reduce:true,
                    //					rereduce:false
                };

            //            renderReportsControls(req);

            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                $('#loader').hide();
                var rows = new Array();
                for (var i in data.rows) {
                    rows[i] = data.rows[i].value;
                    rows[i].line_number = data.rows[i].key[3] + data.rows[i].key[4];
                    rows[i].indicator = data.rows[i].key[5];
                    rows[i].label = data.rows[i].key[6];
                    if (data.rows[i].value.header) {
                        rows[i].header = data.rows[i].value.header;
                        delete rows[i].total
                    }
                }
                
                columns =[{
                    label: $.kansotranslate('Line'),
                    property: ['line_number'],
                    type: 'label' // non-editable
                },{
                    label: $.kansotranslate('Indicator'),
                    property: ['label'],
                    type: 'key' // non-editable and contains the row's key in spreadsheet's data('key')
                }]
                
                for (var col in reports[req.query["report"]].definitions.columns) {
                    var new_col = {}
                    new_col.label = reports[req.query["report"]].definitions.columns[col].title
                    //new_col.property = new Array()
                    //new_col.property.push(col)
                    new_col.property = [col]
                    new_col.type = 'field' // editable
                    columns.push(new_col)
                }
                
                console.log(columns)
                console.log(rows)

                $('[data-page=report_calculated] #report_calculated #report-form #form').spreadsheet({
                    columns: columns,
                    data: rows
                });
            });
        });
    });

    var props = {
        report: req.query["report"],
        period: moment().format("MMMM YYYY"),
        title: reports[req.query["report"]].title
    };

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Report Calculated'),
        content: templates.render('report_calculated.html', req, props)
    };
};


exports.data_records = function(doc, req) {

    // Avoid binding events here because they will accumulate on each request.
    events.once('afterResponse', function() {
        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
                return render500('Failed to setup context.', err);
            }

            // don't add title, we need space for search box
            utils.updateTopNav('activity', null);

            data_records.init(req, {
                district: district,
                isAdmin: isAdmin
            });
        });
    });

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Activity'),
        content: templates.render('loader.html', req, {})
    };
};

/*
 * Try to update child facilities for health centers and districts. Recursive
 * case only really applies to districts.
 */
var updateChildFacilities = function(doc) {
    var view = 'facility_by_parent',
        q = {
            startkey: [doc._id],
            endkey: [doc._id, {}],
            include_docs: true
        }, db = require('db').use(ksutils.getDBName());

    if (!doc || !doc.type) return;

    // only act on facilities that might have children
    if (doc.type !== 'health_center' && doc.type !== 'district_hospital')
        return;

    db.getView(ddoc, view, q, function(err, data) {

        if (err)
            return alert('Failed updating child facilities: ' + err);

        for (var i in data.rows) {
            var d = data.rows[i].doc;
            if (d.parent._id === doc._id && d.parent._rev === doc._rev)
                updateChildFacilities(d);
            d.parent = doc;
            db.saveDoc(d, function(err, res) {
                if (err)
                    alert('Failed updating child facilities: ' + err);
            });
            updateChildFacilities(d);
        }
    });
}

exports.clinics = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('facilities');

        var q,
            view;

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            if (utils.hasPerm(req.userCtx, 'can_edit_any_facility')) {
                view = 'facilities';
                q = {
                    startkey: ['clinic'],
                    endkey: ['clinic', {}],
                    include_docs: true
                };
                q_hc = {
                    startkey: ['health_center'],
                    endkey: ['health_center', {}],
                    include_docs: true
                };
            } else if (utils.hasPerm(req.userCtx, 'can_edit_facility')) {
                view = 'facilities_by_district';
                q = {
                    startkey: [district, 'clinic'],
                    endkey: [district, 'clinic', {}],
                    include_docs: true
                };
                q_hc = {
                    startkey: [district, 'health_center'],
                    endkey: [district, 'health_center', {}],
                    include_docs: true
                };
            } else {
                // should not display facilities
                $('#content').html(
                    '<p class="facilities_msg">You must be a district or national admin to edit facilities</p>'
                );
                return;
            }

            var db = require('db').use(ksutils.getDBName());

            // reload facilities cache
            db.getView(ddoc, view, q_hc, function(err, data) {
                if (err) {
                    return alert(err);
                }
                cache.health_centers = [];
                cache.health_center_names = [];
                _.each(data.rows, function(row) {
                    cache.health_centers.push(row);
                    if (row.value.name) {
                        cache.health_center_names.push(row.value.name);
                    }
                });
            });

            var editSelection = function(td, callback) {
                var val = $(td).find('.dropdown-toggle').text();

                updateCell(td, val, cache.health_center_names);

                // toggle menu
                $(td).find('.dropdown-toggle').trigger('click.dropdown.data-api');

                // on menu item click, save and update cell
                $(td).find('.dropdown-menu a').on('click', function(ev) {
                    ev.preventDefault();
                    var val = $(ev.target).text();
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                    // triggers the save
                    callback(td, val);
                    // update the cell
                    updateCell(td, val, cache.district_names);
                });
            };

            // render spreadsheet
            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                $('#loader').hide();
                var docs = _.map(data.rows, function(row) {
                    return row.doc;
                });
                $('[data-page=facilities] #facilities').spreadsheet({
                    columns: [{
                        label: $.kansotranslate('Village Name'),
                        property: ['name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('Clinic Contact Name'),
                        property: ['contact', 'name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('Clinic Contact Phone'),
                        property: ['contact', 'phone'],
                        type: 'string'
                        //validation: 'phone'
                    }, {
                        label: $.kansotranslate('RC Code'),
                        property: ['contact', 'rc_code'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('Health Center'),
                        property: ['parent', 'name'],
                        type: 'string',
                        createCellHandler: createCell,
                        editSelectionHandler: editSelection
                    }],
                    data: docs,
                    save: function(doc, callback) {
                        // resolve parent object based on name
                        for (var i in cache.health_centers) {
                            var row = cache.health_centers[i];
                            if (doc.parent && row.value.name === doc.parent.name) {
                                doc.parent = row.doc;
                                break;
                            }
                        }
                        db.saveDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            doc._rev = res.rev;
                            callback(null, doc);
                        });
                    },
                    create: function(callback) {
                        db.newUUID(function(err, uuid) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, {
                                _id: uuid,
                                type: 'clinic'
                            });
                        });
                    },
                    remove: function(doc, callback) {
                        db.removeDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, doc);
                        });
                    }
                });
            });
        });
    });

    var props = {
        tab: {
            'clinics': true
        }
    };

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Facilities'),
        content: templates.render('facilities.html', req, props)
    };
};


exports.health_centers = function(doc, req) {
    events.once('afterResponse', function() {

        var db = require('db').use(ksutils.getDBName()),
            q = {},
            q_dh = {},
            view = '';

        utils.updateTopNav('facilities');

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            if (utils.hasPerm(req.userCtx, 'can_edit_any_facility')) {
                view = 'facilities';
                q = {
                    startkey: ['health_center'],
                    endkey: ['health_center', {}],
                    include_docs: true
                };
                q_dh = {
                    startkey: ['district_hospital'],
                    endkey: ['district_hospital', {}],
                    include_docs: true
                };
            } else if (utils.hasPerm(req.userCtx, 'can_edit_facility')) {
                // filter by district
                view = 'facilities_by_district';
                q = {
                    startkey: [district, 'health_center'],
                    endkey: [district, 'health_center', {}],
                    include_docs: true
                };
                q_dh = {
                    startkey: [district, 'district_hospital'],
                    endkey: [district, 'district_hospital', {}],
                    include_docs: true
                };
            } else {
                // should not display facilities
                $('#content').html(
                    '<p class="facilities_msg">' +
                    "You don't have permissions to edit facilities</p>"
                );
                return;
            }

            // reload districts cache
            db.getView(ddoc, view, q_dh, function(err, data) {
                if (err) {
                    return alert(err);
                }
                cache.districts = [];
                cache.district_names = [];
                _.each(data.rows, function(row) {
                    cache.districts.push(row);
                    if (row.value.name) {
                        cache.district_names.push(row.value.name);
                    }
                });
            });

            var editSelection = function(td, callback) {
                var val = $(td).find('.dropdown-toggle').text();

                updateCell(td, val, cache.district_names);

                // toggle menu
                $(td).find('.dropdown-toggle').trigger('click.dropdown.data-api');

                // on click, save and update cell
                $(td).find('.dropdown-menu a').on('click', function(ev) {
                    ev.preventDefault();
                    var val = $(ev.target).text();
                    $('[data-toggle="dropdown"]').parent().removeClass('open')
                    // triggers the save
                    callback(td, val);
                    // update the cell
                    updateCell(td, val, cache.district_names);
                });
            };

            // render spreadsheet
            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                $('#loader').hide();
                var docs = _.map(data.rows, function(row) {
                    var doc = row.doc;
                    return doc;
                });
                var spreadsheet = $('[data-page=facilities] #facilities').spreadsheet({
                    columns: [{
                        label: $.kansotranslate('Health Center Name'),
                        property: ['name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('Health Center Contact Name'),
                        property: ['contact', 'name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('Health Center Contact Phone'),
                        property: ['contact', 'phone'],
                        type: 'string'
                        //validation: 'phone'
                    }, {
                        label: $.kansotranslate('District'),
                        property: ['parent', 'name'],
                        type: 'string',
                        createCellHandler: createCell,
                        editSelectionHandler: editSelection
                    }],
                    data: docs,
                    save: function(doc, callback) {
                        // resolve parent object based on name
                        for (var i in cache.districts) {
                            var row = cache.districts[i];
                            if (doc.parent && row.value.name === doc.parent.name) {
                                doc.parent = row.doc;
                                break;
                            }
                        }
                        db.saveDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            doc._rev = res.rev;
                            updateChildFacilities(doc);
                            callback(null, doc);
                        });
                    },
                    create: function(callback) {
                        db.newUUID(function(err, uuid) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, {
                                _id: uuid,
                                type: 'health_center'
                            });
                        });
                    },
                    remove: function(doc, callback) {
                        db.removeDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, doc);
                        });
                    }
                });
                spreadsheet.on('rangeChange', function() {
                    // close dropdowns on cell change
                    $('[data-toggle="dropdown"]').parent().removeClass('open')
                });
            });
        });
    });

    var props = {
        tab: {
            'health_centers': true
        }
    };

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('Facilities'),
        content: templates.render('facilities.html', req, props)
    };
};

exports.districts = function(doc, req) {
    events.once('afterResponse', function() {

        utils.updateTopNav('facilities');

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
            }
            var db = require('db').use(ksutils.getDBName()),
                view = 'facilities',
                lockRows = false,
                q = {
                    startkey: ['national_office'],
                    endkey: ['national_office', {}],
                    include_docs: true
                };

            renderFacilitiesControls();

            // reload national office cache
            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return alert(err);
                }
                cache.national_office = {};
                // get first national office matched
                for (var i in data.rows) {
                    var row = data.rows[i];
                    cache.national_office = row.doc;
                    break;
                };
            });

            if (utils.hasPerm(req.userCtx, 'can_edit_any_facility')) {
                view = 'facilities';
                q = {
                    startkey: ['district_hospital'],
                    endkey: ['district_hospital', {}],
                    include_docs: true
                };
            } else if (utils.hasPerm(req.userCtx, 'can_edit_facility')) {
                view = 'facilities_by_district';
                q = {
                    startkey: [district, 'district_hospital'],
                    endkey: [district, 'district_hospital', {}],
                    include_docs: true
                };
                lockRows = true;
            } else {
                // should not display facilities
                $('#content').html(
                    '<p class="facilities_msg">' +
                    "You don't have permissions to edit facilities</p>"
                );
                return;
            }

            db.getView(ddoc, view, q, function(err, data) {
                if (err) {
                    return logger.error(err);
                }
                $('#loader').hide();
                var docs = _.map(data.rows, function(row) {
                    return row.doc;
                });
                $('[data-page=facilities] #facilities').spreadsheet({
                    columns: [{
                        label: $.kansotranslate('District Name'),
                        property: ['name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('District Contact Name'),
                        property: ['contact', 'name'],
                        type: 'string'
                    }, {
                        label: $.kansotranslate('District Contact Phone'),
                        property: ['contact', 'phone'],
                        type: 'string'
                        //validation: 'phone'
                    }],
                    data: docs,
                    save: function(doc, callback) {
                        // resolve parent
                        if (cache.national_office) {
                            doc.parent = cache.national_office;
                        }
                        db.saveDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            doc._rev = res.rev;
                            updateChildFacilities(doc);
                            callback(null, doc);
                        });
                    },
                    create: function(callback) {
                        db.newUUID(function(err, uuid) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, {
                                _id: uuid,
                                type: 'district_hospital'
                            });
                        });
                    },
                    remove: function(doc, callback) {
                        db.removeDoc(doc, function(err, res) {
                            if (err) {
                                return callback(err);
                            }
                            callback(null, doc);
                        });
                    },
                    lockRows: lockRows
                });
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
        title: info.translate('Facilities'),
        content: templates.render('facilities.html', req, props)
    };
};


exports.config = function() {
    return {
        body: '' + '(function($) {\n' + '    var info,\n' + '        getInfo = ' + appinfo.getAppInfo.toString() + ';\n' + '    $.kansoconfig = function(key) { info = info || getInfo(); return info[key]; };\n' + '    $.kansotranslate = function(key, locale) { info = info || getInfo(); return info.translate(key, locale) };\n' + '})(jQuery);',
        headers: {
            'Content-Type': 'text/javascript'
        }
    };
}


var restoreFacilities = function(ev) {
    ev.preventDefault();
    var btn = $(this);
    $('#facilities-controls .uploader').click();
};

var uploadFacilities = function(ev) {
    var db = require('db').use(ksutils.getDBName()),
        baseURL = require('duality/core').getBaseURL(),
        overwrite = $('#facilities-controls [name=overwrite]').prop('checked');

    if (this.files.length === 0) return;
    var reader = new FileReader();
    $('#facilities').html(
        templates.render('loader.html', {}, {})
    );

    // disable form elements while running
    $('#facilities-controls [type=checkbox]').disable();
    $('#facilities-controls [type=button]').disable();

    function finish(msg, errors) {
        $('#facilities').html(
            templates.render('facilities_restore.html', {}, {
                msg: msg,
                errors: errors
            })
        );
        $('#facilities-controls [type=checkbox]').enable();
        $('#facilities-controls [type=button]').enable();
    }

    reader.onloadend = function(ev) {
        var json,
            processed_count = 0,
            restored_count = 0,
            errors = [];

        try {
            json = JSON.parse(ev.target.result);
        } catch (e) {
            return finish('Failed to parse JSON file.', [e]);
        }

        $('#facilities').html(
            templates.render('facilities_restore.html', {}, {
                progress: 'Reading file...'
            })
        );

        if (overwrite) {
            console.warn('overwriting facilities');
        }

        function updateProgress(complete, total) {
            total = total || json.length;
            var width = Math.floor(complete / total * 100),
                desc = 'Processed ' + complete + '/' + total + ' records...';
            // start showing stats and progress bar after 1st record
            if (complete == 1) {
                $('#facilities').html(
                    templates.render('facilities_restore.html', {}, {
                        progress: desc,
                        width: "0%"
                    })
                );
            }
            $('#facilities-restore .update-progress .desc').text(desc);
            $('#facilities-restore .update-progress .bar').css('width', width + '%');
        }

        function saveRecord(doc, options, cb) {
            if (typeof(options) === 'function' && !cb) {
                cb = options;
                options = null;
            }
            // delete _rev since this is a new doc in this database
            if (options && options.create && doc._rev) {
                delete doc._rev;
            }
            db.saveDoc(doc, function(err) {
                if (err) {
                    console.error('error saving record', err);
                    errors.push([doc.name, err]);
                } else {
                    restored_count++;
                }
                // continue processing
                processed_count++;
                updateProgress(processed_count);
                cb();
            });
        }

        // check for record first and overwrite if specified

        function onFacility(facility, cb) {
            $.ajax({
                type: 'HEAD',
                url: baseURL + '/_db/' + facility._id,
                complete: function(xhr, txtStatus) {
                    if (xhr.status == 404) {
                        // create a new record
                        saveRecord(facility, {
                            create: true
                        }, cb);
                    } else if (xhr.status == 200) {
                        // quotes are included in response header string,
                        // remove them so couchdb accepts the rev.
                        var rev = xhr.getResponseHeader('ETag').replace(/['"]/g, '');
                        if (rev && overwrite) {
                            // overwrite a record
                            facility._rev = rev;
                            saveRecord(facility, cb);
                        } else {
                            processed_count++;
                            updateProgress(processed_count);
                            cb();
                        }
                    }
                },
                error: function(xhr, txtStatus, err) {
                    // we handle 404, report anything else
                    if (xhr.status != 404) {
                        errors.push([facility.name, err]);
                    }
                }
            });
        }

        function finishLoading(err) {
            var msg = restored_count + '/' + json.length + ' facilities restored.',
                skipped = json.length - restored_count;
            if (err) {
                msg = err + ' ' + msg;
            }
            if (skipped > 0) {
                errors.push("Skipped " + skipped + " records.");
            }
            finish(msg, errors);
        }

        async.forEach(json, onFacility, finishLoading);
    }

    reader.readAsText(this.files[0]);

};

var backupFacilities = function(ev) {
    ev.preventDefault();
    $(window.location).attr('href', $(this).attr('data-url'));
};

var renderFacilitiesControls = function() {
    $('.page-header .controls').first().html(
        templates.render('facilities_controls.html', {}, {
            isAdmin: isAdmin
        })
    ).show();
    $('#facilities-controls .backup').on('click', backupFacilities);
    $('#facilities-controls .restore').on('click', function() {
        $('#facilities-controls .options').hide();
        $('#facilities-controls .options-restore').show();
    });
    $('#facilities-controls .cancel').on('click', function(ev) {
        $('#facilities-controls form')[0].reset();
        $('#facilities-controls .options').show();
        $('#facilities-controls .options-restore').hide();
    });
    $('#facilities-controls .choose').on('click', restoreFacilities);
    $('#facilities-controls .uploader').on('change', uploadFacilities);
};


/**
 * users:
 */
exports.users = function(_doc, _req) {

    var baseURL = require('duality/core').getBaseURL(_req);

    /**
     * fetch_users:
     */
    var fetch_users = function(_callback) {

        $.ajax({
            url: '/_users/_all_docs?include_docs=true',
            success: function(_data, _text, _xhr) {

                var rv = [],
                    data = JSON.parse(_data);

                if (!_.isArray(data.rows)) {
                    return _callback(
                        new Error('Database returned invalid user data')
                    );
                }

                _.each(data.rows, function(_row) {
                    if (_str.startsWith(_row.id, 'org.couchdb.user:')) {
                        rv.push(_row.doc);
                    }
                });

                return _callback(null, rv);
            },
            error: function(_xhr, _status, _err) {
                return _callback(_err);
            }
        });
    };

    /**
     * fetch_facilities:
     */
    var fetch_facilities = function(_callback) {

        $.ajax({
            url: baseURL + '/facilities.json',
            success: function(_data, _text, _xhr) {

                var rv = {}, data = JSON.parse(_data);

                if (!_.isArray(data.rows)) {
                    return _callback(
                        new Error('Database returned invalid facility data')
                    );
                }

                _.each(data.rows, function(_row) {
                    rv[_row.id] = _row.doc;
                });

                return _callback(null, rv);
            },
            error: function(_xhr, _status, _err) {
                return _callback(_err);
            }
        });
    };

    /**
     * select_facility_grouped:
     *   Use select2 to show a two-level list of facilities, with
     *   the first (upper, unselectable) level serving to group
     *   the available facilities by facility type.
     */
    var select_facility_grouped = function(_elt) {

        var term = '',
            ajax = {

                url: baseURL + '/facilities.json',

                data: function(_term, _page) {
                    /* Always called before results, below */
                    term = _term;
                },

                results: function(_data, _page) {

                    var map = {};

                    _.each(_data.rows, function(_row) {

                        var id = _row.id;
                        var type = _row.doc.type;
                        var text = _row.value.name;

                        if (!_.isString(id) || !_.isString(text)) {
                            return; /* continue; */
                        }

                        /* Client-side filtering:
                         *   We should be requesting data from couchdb-lucene
                         *   using a specific query, rather than pulling the
                         *   whole facility list and paring it down on the
                         *   client side. If you switch over to a server-side
                         *   search, you may want to remove this test.
                         */

                        if (term.length > 0) {
                            var l = _str.slugify(text),
                                r = _str.slugify(term);

                            if (!_str.contains(l, r)) {
                                return; /* continue; */
                            }
                        }

                        /* Create first-level headings */
                        if (!_.isObject(map[type])) {
                            map[type] = {
                                children: [],
                                text: _str.titleize(_str.humanize(type))
                            };
                        }

                        /* Create second-level items */
                        map[type].children.push({
                            id: id,
                            text: text
                        });

                    });

                    /* Format as select2 expects */
                    return {
                        results: _.toArray(map)
                    };
                }
            };

        $(_elt).select2({
            ajax: ajax,
            allowClear: true,
            minimumInputLength: 0,
            placeholder: 'Select a facility',

            /* Handler: map `_elt` to `{ id, text }` pair */
            initSelection: function(_elt, _callback) {

                fetch_facilities(function(_err, _facilities) {
                    return _callback({
                        id: _elt.val(),
                        text: _facilities[_elt.val()].name
                    });
                });
            }
        });
    };

    /**
     * populate_user:
     */
    var populate_user = function(_elt, _user) {

        var elt = $(_elt);
        var user = (_user || {});

        var properties = {
            _id: true,
            _rev: true,
            name: true,
            fullname: true,
            email: true,
            phone: true,
            language: true,
            facility_id: 'facility',
            salt: 'salt',
            derived_key: 'derived_key',
            password_scheme: 'password_scheme'
        }

        _.each(properties, function(_to, _from) {

            var val = user[_from];
            var elt = $('#' + (_to === true ? _from : _to));

            if (elt.hasClass('select2-offscreen')) {
                elt.select2('val', val);
            } else {
                elt.val(val);
            }
        });

        $('#password').val('');
        $('#type').select2('val', unmap_user_type(user.roles || []));

        if (user._id) {
            $('#name').prop('disabled', true);
            $('#save').val('Save Changes');
        } else {
            $('#name').prop('disabled', false);
            $('#save').val('Create User');
        }
    };

    /**
     * serialize_user:
     */
    var serialize_user = function(_elt) {

        var rv = {};
        var elt = $(_elt);

        var properties = {
            _id: true,
            _rev: true,
            name: true,
            fullname: true,
            email: true,
            password: true,
            phone: true,
            language: true,
            facility: 'facility_id',
            salt: 'salt',
            derived_key: 'derived_key',
            password_scheme: 'password_scheme'
        }

        _.each(properties, function(_to, _from) {

            var val, elt = $('#' + _from);

            if (elt.hasClass('select2-offscreen')) {
                val = elt.select2('val');
            } else {
                val = elt.val();
            }

            if (val !== null && val.length > 0) {
                rv[(_to === true ? _from : _to)] = val;
            }
        });

        rv.type = 'user';

        rv.roles = map_user_type($('#type').select2('val'));

        return rv;
    };

    /**
     * save_user:
     */
    var save_user = function(_user, _callback) {

        if (!_user._id) {
            _user._id = 'org.couchdb.user:' + _user.name;
        }

        $.ajax({
            method: 'PUT',
            dataType: 'json',
            data: JSON.stringify(_user),
            url: '/_users/' + _user._id,
            contentType: 'application/json',

            success: function(_data, _text, _xhr) {

                refresh_users(function(_err) {

                    if (_err) {
                        return (_callback ? _callback(_err) : false);
                    }

                    $('#' + _str.slugify(_user._id)).click();

                    if (_callback) {
                        return _callback(null, _data);
                    }
                });
            },

            error: function(_xhr, _status, _err) {
                if (_callback) {
                    return _callback(_err);
                }
            }
        });
    };

    /**
     * map_user_type:
     */
    var map_user_type = function(_type) {

        var map = {
            'national-manager': ['kujua_user', 'data_entry', 'national_admin'],
            'district-manager': ['kujua_user', 'data_entry', 'district_admin'],
            'facility-manager': ['kujua_user', 'data_entry'],
            'data-entry': ['data_entry'],
            'analytics': [],
            'gateway': ['kujua_gateway']
        };

        var roles = map[_type];

        if (!roles) {
            return [];
        }

        if (!_.isArray(roles)) {
            roles = [roles];
        }

        /* User type is always first, by convention */
        return (roles ? [_type].concat(roles) : [_type]);
    };

    /**
     * unmap_user_type:
     */
    var unmap_user_type = function(_roles) {

        if (_roles.length <= 1) {
            return null;
        }

        /* User type is always first, by convention */
        return _roles[0];
    };

    /**
     * populate_users:
     */
    var populate_users = function(_elt, _users, _facilities) {

        var td = $('<td />');
        var elt = $(_elt).empty();

        elt.append(
            $('<tr class="spacer" />').append(td.clone())
        );

        _.each(_users, function(_user, _i) {

            var tr = $('<tr />'),
                facility_id = _user.facility_id,
                delete_button = $('<button>Delete</button>'),
                input = $('<input name="user" type="radio" />');

            var facility_label = (
                (_facilities[facility_id] || {}).name || 'None'
            );

            var user_type = (
                (unmap_user_type(_user.roles || {}) || 'unknown')
            );

            input.attr('id', _str.slugify(_user._id));

            tr.append(td.clone().append(input))
                .append(td.clone().text(_user.name).addClass('first'))
                .append(td.clone().text(_user.fullname))
                .append(td.clone().text(_str.titleize(_str.humanize(user_type))))
                .append(td.clone().text(facility_label))
                .append(td.clone().append(delete_button).addClass('last'));

            if (_user.name == 'admin') {
                delete_button.prop('disabled', true);
            }

            /* Full per-user JSON:
             *  Stick this in a data attribute so we have it later.
             */
            elt.append(
                tr.attr('data-json', JSON.stringify(_user))
            );

            /* Full-row click handler:
             *  Select radio buttons appropriately when the
             *  user clicks anywhere inside of a single table row.
             */
            tr.on('click', function(_ev) {

                var user = JSON.parse(tr.attr('data-json'));
                tr.find('input[name="user"]').prop('checked', 'checked');

                if ($('#id').val() != user._id) {
                    populate_user('#user-creation', user);
                }

                input.trigger('change');
                _ev.stopPropagation();
            });

            /* Selection display logic:
             *   This handles highlighting/unhighlighting of rows.
             */
            input.on('change', function(_ev) {

                elt.find('tr').removeClass('selected');

                if (input.prop('checked')) {
                    input.parents('tr').addClass('selected');
                }

                _ev.stopPropagation();
            });

            /* User deletion:
             *   This handles confirmation and deletion of a user.
             */
            delete_button.on('click', function(_ev) {

                var confirm_text =
                    "Are you sure you want to delete the user '" + _user.name + "'? This operation cannot be undone.";

                if (!confirm(confirm_text)) {
                    return false;
                }

                $.ajax({
                    method: 'DELETE',
                    url: '/_users/' + _user._id + '?rev=' + _user._rev,

                    success: function(_data, _text, _xhr) {
                        refresh_users();
                        populate_user(_elt, false);
                    },

                    error: function(_xhr, _status, _err) {
                        /* Fix me: Handle deletion error here */
                    }
                });

                _ev.stopPropagation();
            });
        });
    };

    /**
     * refresh_users:
     */
    var refresh_users = function(_callback) {

        fetch_facilities(function(_err, _facilities) {

            if (_err) {
                return (_callback ? _callback(_err) : false);
            }

            fetch_users(function(_e, _users) {

                if (_e) {
                    return (_callback ? _callback(_e) : false);
                }

                populate_users('#user-rows', _users, _facilities);

                if (_callback) {
                    _callback(null, _users, _facilities);
                }
            });
        });
    };

    /**
     * show_status:
     */
    var show_status = function(_elt, _err) {

        var status_elt = $(_elt);

        if (_err) {
            status_elt.text('Save Failed').addClass('error');
        } else {
            status_elt.text('Saved Successfully');
        }

        status_elt.fadeIn(100, function() {
            status_elt.delay(1000).fadeOut(1000, function() {
                status_elt.text('').show().removeClass('error');
            });
        });
    };

    /* Client-side initialization begins here */
    events.once('afterResponse', function() {

        $('#type').select2({
            allowClear: true,
            placeholder: 'Select a user type'
        });

        $('#language').select2({
            allowClear: true,
            placeholder: 'Select a default language'
        });

        $('body').click(function(_ev) {

            populate_user('#user-creation', false);

            $('#user-rows').find('input[type=radio]')
                .prop('checked', false).trigger('change');
        });

        $('#user-creation').click(function(_ev) {
            _ev.stopPropagation();
        });

        select_facility_grouped('#facility');
        refresh_users();

        $('.page-header .controls').empty();
        $('.page-header h1.pull-left').empty().text('User Management');

        $('#save').click(function(_ev) {
            save_user(
                serialize_user('#user-creation'), function(_err) {
                    show_status('#user-creation .status', _err);
                }
            );
        });

        $('#user-form').submit(function(_ev) {
            _ev.stopPropagation();
            _ev.preventDefault();
        });
    });

    return {
        info: appinfo.getAppInfo.call(this, _req),
        content: templates.render('users.html', _req, {})
    };
}

exports.reminders = function(doc, req) {
    events.once('afterResponse', function() {
        // Avoid binding events here because it causes them to accumulate on
        // each request.

        setupContext(req, function(err) {
            if (err) {
                console.error('setupContext error', err);
                return render500('Failed to setup context.', err, doc);
            }
            var db = require('db').use(ksutils.getDBName()),
                html = '',
                label,
                key;

            // descending by default
            var q = _.extend(req.query, {
                descending: true,
                group: 'true',
                limit: '1000'
            });

            if (district) {
                q['startkey'] = [district, {}];
                q['endkey'] = [district];
            }

            utils.updateTopNav('reminders_log');

            function startWeek() {
                if (label !== undefined) {
                    html += "</tbody>";
                }
                html += "<tbody><th colspan=\"3\">Reminders for week " + key[1] + "/" + key[2] + "</th>";
            }

            db.getView('kujua-lite', 'reminders', q, function(err, data) {
                if (err) {
                    return render500('Failed reminders view.', err);
                }
                html += "<table class=\"table\"><tbody>";

                if (data.rows.length === 0)
                    html += "<tr><td class=\"span2\">No reminders found.</td></tr>";

                data.rows.forEach(function(row) {
                    key = row.key;
                    if (label !== '' + key[1] + key[2]) {
                        startWeek();
                        label = '' + key[1] + key[2];
                    }
                    html += "<tr><td class=\"span2\"><span class=\"label\">" + key[4] + "</span></td><td>" + key[3] + "</td><td>" + row.value + "</td></tr>";
                });
                html += "</tbody></table>";
                $('#content').html(html);
            });
        });
    });

    return {
        info: appinfo.getAppInfo.call(this, req),
        content: templates.render('loader.html', req, {})
    };
};

exports.help = function(doc, req) {

    function loadSearchHelp() {
        // ick, change to using /_rewrite/ if possible
        var url = '/_fti/local' + db.current().url + '/_design/' + ddoc + '/data_records';
        if (cache.search_help_fields) {
            return success(cache.search_help_fields);
        }

        function success(data, text, xhr) {
            cache.search_help_fields = data;
            $('[data-page=help] .field-data').replaceWith(
                templates.render(
                    'help/search-fields.html', {}, {
                        fields: data.fields.sort()
                    }
                )
            );
        };

        function error(xhr, status, err) {
            $('[data-page=help] .fields-data').replaceWith(
                '<li>' + err + '</li>'
            );
        };
        $.ajax({
            url: url,
            success: success,
            error: error,
            dataType: 'json'
        });
    };

    function showSearchHelp(callback) {
        $('[data-page=help] #loader').replaceWith(
            templates.render('help/search.html', {}, {})
        );
        if (typeof callback === 'function') {
            callback();
        }
    };


    events.once('afterResponse', function() {
        var info = appinfo.getAppInfo.call(this, req);
        utils.updateTopNav('help');
        showSearchHelp(loadSearchHelp);
    });

    return {
        info: appinfo.getAppInfo.call(this, req),
        content: templates.render('loader.html', req, {})
    };
};

exports.app_settings = function(doc, req) {
    // needs to be called with doc id so we get appropriate ETAG header/caching
    return {
        body: JSON.stringify(appinfo.getAppInfo.call(this) || {}),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
};

exports.not_found = function(doc, req) {

    var info = appinfo.getAppInfo.call(this, req);

    return {
        info: info,
        title: info.translate('404 - Not Found'),
        content: templates.render('404.html', req, {})
    };
};

var render500 = exports.render500 = function(msg, err, doc) {
    if (typeof req === 'undefined') {
        req = {};
    }

    if (_.isObject(err)) {
        err = JSON.stringify(err, null, 2);
    }

    return $('#content').html(
        templates.render("500.html", req, {
            doc: doc,
            msg: msg,
            err: err
        })
    );
}

var createCell = function(col, val) {
    // wrap td text in dropdown markup and toggle dropdown
    var req = {};
    var td = $('<td/>').html(
        templates.render('spreadsheet_dropdown.html', req, {
            value: val
        })
    );
    return td;
};

var updateCell = function(td, val, items) {
    var req = {};
    $(td).html(
        templates.render('spreadsheet_dropdown.html', req, {
            items: items,
            value: val
        })
    );
};

exports.checkDistrictConstraint = function(options, callback) {
    utils.getUserDistrict(options.userCtx, function(err, data) {
        if (err) {
            return callback(err);
        }
        district = data;
        if (district) {
            options.db.getDoc(district, function(err, doc) {
                if (err) {
                    if (err.error === 'not_found') {
                        callback("No facility found with id '" + district + "'. Your admin needs to update the Facility Id in your user details.");
                    } else {
                        callback(err);
                    }
                } else if (doc.type !== 'district_hospital') {
                    callback("No facility found with id '" + district + "'. Your admin needs to update the Facility Id in your user details.");
                } else {
                    callback();
                }
            });
        } else {
            callback('No district assigned to district admin.');
        }
    });
};

/**
 * Centralized some variable initializaiton that is used in most of the
 * views/shows to filter on a user's district or `facility_id` value.
 */
var setupContext = function(req, callback) {
    isAdmin = utils.isUserAdmin(req.userCtx);
    isDistrictAdmin = utils.isUserDistrictAdmin(req.userCtx);

    if (isAdmin) {
        callback();
    } else if (isDistrictAdmin) {
        exports.checkDistrictConstraint({
            db: require('db').use(ksutils.getDBName()),
            userCtx: req.userCtx
        }, callback);
    } else {
        //		callback();
        // TODO : Proper access control.
        // not logged in or roles is not setup right
        $('#content').html(
            templates.render("403.html", req, {})
        );

        var garden_app_support = require('garden-app-support');
        garden_app_support.get_garden_ctx(function(err, ctx) {
            if (err) return;
            $('.login_wait').hide();
            $('.login_show').show();
            $('.page_login').attr('href', ctx.login_url);
        })

        return;
    }
};