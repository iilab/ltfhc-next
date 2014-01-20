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
//    ksutils = require('kujua-sms/utils'),
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

exports.home = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Home',
        content: templates.render('home.html',req, {nav: 'home'})
    };
};

exports.visit = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Visit',
        content: templates.render('visit.html',req, {nav: 'visit'})
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

exports.config = function() {
    return {
        body: '' +
        '(function($) {\n' +
        '    var info,\n' +
        '        getInfo = ' + appinfo.getAppInfo.toString() + ';\n' +
        '    $.kansoconfig = function(key) { info = info || getInfo(); return info[key]; };\n' +
        '    $.kansotranslate = function(key, locale) { info = info || getInfo(); return info.translate(key, locale) };\n' +
        '})(jQuery);',
        headers: {
            'Content-Type': 'text/javascript'
        }
    };
}

/**
 * users:
 */
exports.users = function (_doc, _req) {

    var baseURL = require('duality/core').getBaseURL(_req);

    /**
     * fetch_users:
     */
    var fetch_users = function (_callback) {

        $.ajax({
            url: '/_users/_all_docs?include_docs=true',
            success: function (_data, _text, _xhr) {

                var rv = [], data = JSON.parse(_data);

                if (!_.isArray(data.rows)) {
                    return _callback(
                        new Error('Database returned invalid user data')
                    );
                }

                _.each(data.rows, function (_row) {
                    if (_str.startsWith(_row.id, 'org.couchdb.user:')) {
                        rv.push(_row.doc);
                    }
                });

                return _callback(null, rv);
            },
            error: function (_xhr, _status, _err) {
                return _callback(_err);
            }
        });
    };

    /**
     * fetch_facilities:
     */
    var fetch_facilities = function (_callback) {

        $.ajax({
            url: baseURL + '/facilities.json',
            success: function (_data, _text, _xhr) {

                var rv = {}, data = JSON.parse(_data);

                if (!_.isArray(data.rows)) {
                    return _callback(
                        new Error('Database returned invalid facility data')
                    );
                }

                _.each(data.rows, function (_row) {
                    rv[_row.id] = _row.doc;
                });

                return _callback(null, rv);
            },
            error: function (_xhr, _status, _err) {
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
    var select_facility_grouped = function (_elt) {

        var term = '', ajax = {

            url: baseURL + '/facilities.json',

            data: function (_term, _page) {
                /* Always called before results, below */
                term = _term;
            },

            results: function (_data, _page) {

                var map = {};

                _.each(_data.rows, function (_row) {

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
                        id: id, text: text
                    });

                });

                /* Format as select2 expects */
                return { results: _.toArray(map) };
            }
        };

        $(_elt).select2({
            ajax: ajax,
            allowClear: true,
            minimumInputLength: 0,
            placeholder: 'Select a facility',

            /* Handler: map `_elt` to `{ id, text }` pair */
            initSelection: function (_elt, _callback) {

                fetch_facilities(function (_err, _facilities) {
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
    var populate_user = function (_elt, _user) {

        var elt = $(_elt);
        var user = (_user || {});

        var properties = {
            _id: true, _rev: true, name: true,
              fullname: true, email: true, phone: true,
              language: true, facility_id: 'facility',
              salt: 'salt', derived_key: 'derived_key',
              password_scheme: 'password_scheme'
        }

        _.each(properties, function (_to, _from) {

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
    var serialize_user = function (_elt) {

        var rv = {};
        var elt = $(_elt);

        var properties = {
            _id: true, _rev: true, name: true,
              fullname: true, email: true, password: true,
              phone: true, language: true, facility: 'facility_id',
              salt: 'salt', derived_key: 'derived_key',
              password_scheme: 'password_scheme'
        }

        _.each(properties, function (_to, _from) {

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
    var save_user = function (_user, _callback) {

        if (!_user._id) {
            _user._id = 'org.couchdb.user:' + _user.name;
        }

        $.ajax({
            method: 'PUT',
            dataType: 'json',
            data: JSON.stringify(_user),
            url: '/_users/' + _user._id,
            contentType: 'application/json',

            success: function (_data, _text, _xhr) {

                refresh_users(function (_err) {

                    if (_err) {
                        return (_callback ? _callback(_err) : false);
                    }

                    $('#' + _str.slugify(_user._id)).click();
               
                    if (_callback) {
                        return _callback(null, _data);
                    }
                });
            },

            error: function (_xhr, _status, _err) {
                if (_callback) {
                    return _callback(_err);
                }
            }
        });
    };

    /**
     * map_user_type:
     */
    var map_user_type = function (_type) {

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
            roles = [ roles ];
        }

        /* User type is always first, by convention */
        return (roles ? [ _type ].concat(roles) : [ _type ]);
    };

    /**
     * unmap_user_type:
     */
    var unmap_user_type = function (_roles) {

        if (_roles.length <= 1) {
            return null;
        }

        /* User type is always first, by convention */
        return _roles[0];
    };

    /**
     * populate_users:
     */
    var populate_users = function (_elt, _users, _facilities) {

        var td = $('<td />');
        var elt = $(_elt).empty();

        elt.append(
          $('<tr class="spacer" />').append(td.clone())
        );

        _.each(_users, function (_user, _i) {

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
            tr.on('click', function (_ev) {
                
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
            input.on('change', function (_ev) {

                elt.find('tr').removeClass('selected');

                if (input.prop('checked')) {
                    input.parents('tr').addClass('selected');
                }

                _ev.stopPropagation();
            });

            /* User deletion:
             *   This handles confirmation and deletion of a user.
             */
            delete_button.on('click', function (_ev) {

                var confirm_text =
                    "Are you sure you want to delete the user '"
                        + _user.name + "'? This operation cannot be undone.";

                if (!confirm(confirm_text)) {
                    return false;
                }

                $.ajax({
                    method: 'DELETE',
                    url: '/_users/' + _user._id + '?rev=' + _user._rev,

                    success: function (_data, _text, _xhr) {
                        refresh_users();
                        populate_user(_elt, false);
                    },

                    error: function (_xhr, _status, _err) {
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
    var refresh_users = function (_callback) {

        fetch_facilities(function (_err, _facilities) {

            if (_err) {
                return (_callback ? _callback(_err) : false);
            }

            fetch_users(function (_e, _users) {

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
    var show_status = function (_elt, _err) {

        var status_elt = $(_elt);

        if (_err) {
            status_elt.text('Save Failed').addClass('error');
        } else {
            status_elt.text('Saved Successfully');
        }

        status_elt.fadeIn(100, function () {
            status_elt.delay(1000).fadeOut(1000, function () {
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

        $('body').click(function (_ev) {

          populate_user('#user-creation', false);

          $('#user-rows').find('input[type=radio]')
            .prop('checked', false).trigger('change');
        });

        $('#user-creation').click(function (_ev) {
            _ev.stopPropagation();
        });

        select_facility_grouped('#facility');
        refresh_users();

        $('.page-header .controls').empty();
        $('.page-header h1.pull-left').empty().text('User Management');

        $('#save').click(function (_ev) {
            save_user(
                serialize_user('#user-creation'), function (_err) {
                    show_status('#user-creation .status', _err);
                }
            );
        });

        $('#user-form').submit(function (_ev) {
            _ev.stopPropagation();
            _ev.preventDefault();
        });
    });

    return {
        info: appinfo.getAppInfo.call(this, _req),
        content: templates.render('users.html', _req, {})
    };
}

exports.help = function (doc, req) {

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
                    'help/search-fields.html', {}, {fields: data.fields.sort()}
                )
            );
        };
        function error(xhr, status, err) {
            $('[data-page=help] .fields-data').replaceWith(
                '<li>'+err+'</li>'
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


    events.once('afterResponse', function () {
        var info = appinfo.getAppInfo.call(this, req);
        utils.updateTopNav('help');
        showSearchHelp(loadSearchHelp);
    });

    return {
        info: appinfo.getAppInfo.call(this, req),
        content: templates.render('loader.html', req, {})
    };
}
