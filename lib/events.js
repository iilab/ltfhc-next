/**
 * Bindings to Kanso events
 */

var duality_events = require('duality/events'),
    dutils = require('duality/utils'),
    querystring = require('querystring'),
    templates = require('duality/templates'),
    session = require('session'),
    cookies = require('cookies'),
    users = require('users'),
    moment = require('moment'),
    _ = require('underscore'),
    shows = require('./shows'),
    data_records = require('./data_records'),
    //    objectpath = require('views/lib/objectpath'),
    utils = require('kujua-utils'),
    ksutils = require('./utils'),
    url = require('url'),
    settings = require('settings/root'),
    appinfo = require('./appinfo'),
    locale = require('locale'),
    ddoc = settings.name,
    app_settings = {};


/*var initDropdown = function() {
    if ($('.dropdown-toggle').dropdown) {
        $('.dropdown-toggle').dropdown();
    }
};*/

// wrap code spans with overflow auto. typically called after docsLoaded event
// is triggered.
var wrapCodeBlocks = function() {
    $('#docs-body code').each(function(idx, el) {
        var limit = 860,
            _el = $(this),
            width = _el.width();
        if (_el.hasClass('shorten')) {
            _el.wrap($('<div/>').addClass('scroll-short'));
        } else if (width > limit) {
            _el.wrap($('<div/>').addClass('scroll'));
        }
    });
};

exports.addHelpers = function() {
    // add helpers
    templates.addHelpers({
        translate: function(chunk, context, bodies, params) {
            var value = this.tap(params.value, chunk, context);

            return chunk.write($.kansotranslate(value));
        },
        formatDate: function(chunk, context, bodies, params) {
            var timestamp = Number(this.tap(params.timestamp, chunk, context)),
                format = this.tap(params.format, chunk, context);

            if (_.isNaN(timestamp)) {
                timestamp = this.tap(params.timestamp, chunk, context);
            }

            // todo use data_format setting if format is not passed in
            format = format || 'DD, MMM YYYY, HH:mm:ss ZZ';

            return chunk.write(moment(timestamp).format(format));
        },
        formName: function(chunk, context, bodies, params) {
            var form = this.tap(params.form, chunk, context);

            return chunk.write(ksutils.getFormTitle(form));
        },
        contact: function(chunk, context, bodies, params) {
            var entities = this.tapObject(params.entities, chunk, context),
                from = this.tap(params.from, chunk, context),
                to = this.tap(params.to, chunk, context),
                contact,
                clinic;

            if (entities) {

                contact = objectpath.get(
                    entities,
                    app_settings.contact_display_short
                );

                if (!contact) {
                    contact = entities.clinic && entities.clinic.name;
                }
            }

            if (!contact) {
                contact = from;
            }
            if (!contact) {
                contact = to;
            }
            if (!contact) {
                contact = '<i class="icon-question-sign" title="Unknown"></i>';
            }

            return chunk.write(contact);
        },
        tasksByState: function(chunk, context, bodies, params) {
            var array = this.tapArray(params.array, chunk, context),
                state = this.tap(params.state, chunk, context),
                matches;

            matches = _.filter(array, function(item) {
                return item.state === state;
            });

            return bodies.block(chunk, context.push(matches));
        },
        ifHasState: function(chunk, context, bodies, params) {
            var array = this.tapArray(params.array, chunk, context),
                state = this.tap(params.state, chunk, context),
                body = bodies.block,
                skip = bodies['else'],
                cond;

            cond = _.find(array, function(item) {
                return item && item.state === state;
            });


            if (cond) {
                return chunk.render(bodies.block, context);
            } else if (skip) {
                return chunk.render(bodies['else'], context);
            } else {
                return chunk;
            }
        },
        countByState: function(chunk, context, bodies, params) {
            var array1 = this.tapArray(params.array1, chunk, context),
                state = this.tap(params.state, chunk, context),
                matches,
                array = [];

            if (params.array2) {
                array1 = array1.concat(
                    this.tapArray(params.array2, chunk, context)
                );
            }

            matches = _.filter(array1, function(item) {
                return item && item.state === state;
            });

            return chunk.write(matches.length);
        },
        isAdmin: function(chunk, context, bodies, params) {
            var body = bodies.block,
                skip = bodies['else'];

            if (data_records.isAdmin) {
                return chunk.render(bodies.block, context);
            } else if (skip) {
                return chunk.render(skip, context);
            } else {
                return chunk;
            }
        },
        hasPermission: function(chunk, context, bodies, params) {
            var body = bodies.block,
                skip = bodies['else'],
                permission = this.tap(params.permission, chunk, context);

            if (utils.hasPerm(data_records.userCtx, permission)) {
                return chunk.render(bodies.block, context);
            } else if (skip) {
                return chunk.render(skip, context);
            } else {
                return chunk;
            }
        },
        idx: function(chunk, context, bodies) {
            if (bodies.block) {
                return bodies.block(chunk, context.push(context.stack.index));
            } else {
                return chunk;
            }
        },
        if : function(chunk, context, bodies, params) {
            var body = bodies.block,
                skip = bodies['else'];

            if (params && params.cond) {
                var cond = params.cond;

                cond = this.tap(cond, chunk, context);
                // eval expressions with given dust references
                if (eval(cond)) {
                    if (body) {
                        return chunk.render(bodies.block, context);
                    } else {
                        _console.log("Missing body block in the if helper!");
                        return chunk;
                    }
                }
                if (skip) {
                    return chunk.render(bodies['else'], context);
                }
            }
            // no condition
            else {
                _console.log("No condition given in the if helper!");
            }
            return chunk;
        }
    });

};

/**
 * The init method fires when the app is initially loaded from a page rendered
 * by CouchDB.  These should only be executed once when the app loads.
 */
duality_events.on('init', function() {

    try {
        app_settings = appinfo.getAppInfo.call(this);
    } catch (e) {
        shows.render500('Failed to retrieve settings.');
        console.error('Failed to retrieve settings.');
        throw e;
    }

    exports.addHelpers();

    // render top nav labels
    $('.navbar-header #emr_home').append('EMR - ' + $.kansotranslate('Home'));
    $('#topnav .nav .patients a').append(' ' + $.kansotranslate('Patients'));
    $('#topnav .nav .visits a').append(' ' + $.kansotranslate('Visits'));
    $('#topnav .nav .reports a').append(' ' + $.kansotranslate('Reports'));
    $('#topnav .nav .reports_calculated a').append(' ' + $.kansotranslate('Reports Calculated'));
    //    $('#topnav .nav .sms-forms-data a').append(' ' + $.kansotranslate('Export'));
    $('#topnav .nav .facilities a').append(' ' + $.kansotranslate('Facilities'));
    $('#topnav .nav .help a').append(' ' + $.kansotranslate('Help'));

    // Set version on all pages
    $('.version').text(settings.version);
    $('.clinic').text(settings.clinic);

    // Dynamic year for footer copyright
    $("#year").text(new Date().getFullYear());

    // add handler to docsPageLoader event for #supportedforms + p elements
    $(document).on('docsPageLoaded', wrapCodeBlocks);

    //$(document).on('click', '.spreadsheet-help .icon-question-sign', function(ev) {
    //    var el = $(ev.target);
    //    el.siblings('ul').toggle();
    //});

    // our version of bootstrap does not clear error on textareas
    $(document).on('focus', 'textarea', function(ev) {
        $(ev.target).closest('.control-group').removeClass('error');
    });

    $(document).on('click', '.controls .edit-mode .btn', data_records.handleUpdateDropdown);
    $(document).on('click', '.add-message button, .add-message a', data_records.handleSendMessage);

});

/**
 * The sessionChange event fires when the app is first loaded and the user's
 * session information becomes available. It is also fired whenever a change
 * to the user's session is detected, for example after logging in or out.
 */

// stores a reference to the modal dialog
var m;

session.on('change', function(userCtx, req) {

    var users = require('users')

    try {
        app_settings = appinfo.getAppInfo.call(this);
    } catch (e) {
        shows.render500('Failed to retrieve settings.');
        console.error('Failed to retrieve settings.');
        throw e;
    }
    exports.addHelpers();

    var isAdmin = utils.isUserAdmin(userCtx);

    _.extend(data_records, {
        isAdmin: isAdmin,
        userCtx: userCtx
    });

    if (userCtx.name) {
        users.get(userCtx.name, function (err, doc) {
            if (err) {
                console.error(err);
            }
            session.emit('userDoc', doc);
        });
    }
    else {
        session.emit('userDoc', null);
    }

    if (!$('#session_menu').length) {
        $('#topnav .pull-right').append(
            '<li id="session_menu" class="dropdown"><li>'
        );
    }
    var el;

    if (userCtx.name) {
        log("Logged in.")
        el = $(
            '<li id="session_menu" class="dropdown">' +
            '<a class="dropdown-toggle" data-toggle="dropdown">' +
            '<i class="icon icon-user"></i> ' + userCtx.name + ' ' +
            '<b class="icon icon-chevron-down"></b>' +
            '</a>' +
            '<ul class="dropdown-menu" role="menu">' +
            '<li><a class="logout" href="#">Logout</a></li>' +
            '</ul>' +
            '</li>'
        );
        console.log(userCtx)
        //$('.dropdown-toggle', el).click(data_records.handleUpdateDropdown);
        $('.logout', el).click(function(ev) {
            ev.preventDefault();
            session.logout(function(err, resp) {
                location.href = dutils.getBaseURL();
            });
            return false;
        });
    } else {
        log("Not logged in.")
        el = $(
            '<li id="session_menu">' +
            '<a class="login" href="#">' + $.kansotranslate('Login') + '</a>' +
            '</li>'
        );

        if (m) {
            // clear previous modal dialog
            m.modal('hide');
            m.data('modal', null);
            m.remove();
        }
        m = $(templates.render("login_modal.html", {
            userCtx: userCtx
        }, {}));

        var submitHandler = function(ev) {
            ev.preventDefault();

            var username = $('#id_username', m).val();
            var password = $('#id_password', m).val();

            $('.alert', m).remove();
            $('.help-inline', m).remove();
            $('.control-group', m).removeClass('error');
            $('.controls', m).show(); // sometimes these get hidden

            var username_cg = $('#id_username').parents('.control-group');
            var password_cg = $('#id_password').parents('.control-group');
            var errors = false;

            if (!username) {
                username_cg.addClass('error');
                $('#id_username').attr("placeholder", $.kansotranslate('Username Required'));
                $('#id_username').parent().addClass("has-error");
                errors = true;
            }
            if (!password) {
                password_cg.addClass('error');
                $('#id_password').attr("placeholder", $.kansotranslate('Password Required'));
                $('#id_password').parent().addClass("has-error");
                errors = true;
            }
            if (errors) {
                return false;
            }

            session.login(username, password, function(err, usrCtx) {
                if (err) {
                    var msg = err.toString();
                    $('form', m).after(
                        '<div class="">' + msg + '</div>'
                    );
                } else {
                    m.modal('hide');
                    users.get(username, function (err, doc) {
//                        if (typeof cookies.readBrowserCookie("userLang") != 'undefined') {
                            cookies.setBrowserCookie(req, {name: "userLang", value: doc.language})
 //                       }
                    })

                    location.href = dutils.getBaseURL();                    
                }
            });
            return false;
        };

        $('form', m).submit(submitHandler);

        // fake form submit event
        $('input', m).keyup(function(ev) {
            if (ev.keyCode === 13) {
                return submitHandler.apply(this, arguments);
            }
        });

        $('.btn-primary', m).click(submitHandler);
        $('.btn-close', m).click(function() {
            m.modal('hide');
        });
        $('.btn-cancel', m).click(function() {
            m.modal('hide');
        });

        $('.login', el).click(function(ev) {
            ev.preventDefault();
            m.modal('show');
            return false;
        });

        m.on('shown.bs.modal', function() {
            $('#id_username').focus();
        })
    }

    for (lang in app_settings.locales) {
        $('.dropdown-menu', el).append(
            '<li><a href="#" class="lang" id="' + lang + '">' + app_settings.locales[lang] + '</a></li>'
        );
        $('.dropdown-menu .lang', el).click(function(ev) {
            ev.preventDefault();
            console.log(ev.target.id)
            cookies.setBrowserCookie(req, {name: "userLang", value: ev.target.id})
            location.href = dutils.getBaseURL();
            return false;
        });
    }

    $('#session_menu').replaceWith(el);

    if (utils.isDbAdmin(userCtx)) {
        $('.dropdown-menu', el).append(
            '<li><a href="' + dutils.getBaseURL() + '/users">Administration</a></li>'
        );
    }
    $('#session_menu').replaceWith(el);

    // hide the nav items from non-admin users
    if (_.difference(['district_admin', 'national_admin', '_admin'], userCtx.roles).length === 3) {
        $('.navbar .nav li').hide();
        $('.navbar .nav .docs').show();
    } else {
        $('.navbar .nav li').show();
    }
    $('#topnav .navbar-right').append(el);

});

session.on('userDoc', function (doc) {
    if (settings.type === 'district') {
        if (doc) {
            var districts = require('lib/districts');
            var district = _.detect(districts, function (district) {
                return district.name === doc.district;
            });
            session.emit('userDistrict', district);
        }
        else {
            session.emit('userDistrict', null);
        }
    }
});

session.on('userDistrict', function (district) {
    window.userDistrict = district;

    $('.navbar-right clinic-reports').remove();
    if (district && settings.type === 'district') {
        var baseURL = dutils.getBaseURL();
        var html = _.map(district.clinics, function (clinic) {
            var clinic_url = baseURL + '/clinic/' + clinic.name;
            return '<li class="clinic-reports clinic-' + clinic.name + '">' +
                '<a href="' + clinic_url + '">' +
                    '<i class="icon icon-group"></i> ' + clinic.name +
                '</a>' +
            '</li>';
        }).join('');
        $('.navbar-right').prepend(html);
    }
});


/**
 * The updateFailure event fires when an update function returns a document as
 * the first part of an array, but the client-side request to update the
 * document fails.
 */

duality_events.on('updateFailure', function(err, info, req, res, doc) {
    alert(err.message || err.toString());
});
