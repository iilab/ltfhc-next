/**
 * This has to run in the shows/list/update context for 'this' to work
 * Specifically, needs patched duality/core.js to have correct context
 *
 * Called server side from show.js/config() with toString() to return a client side config.js
 * Called by duality on init AND on change with app_settings = appinfo.getAppInfo.call(this);
 *  
 *
 */

exports.getAppInfo = function(req) {
    var defaults = require('lib/app_settings'),
        app_settings = getSettings.call(this, req),
        _ = _ || require('underscore'),
        url = url || require('url');



    // use mustache syntax
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };


    /*
     * On server side app_settings is availble on design doc (this) and if
     * call from client side we fetch app_settings via couchdb show.
     *
     * returns object
     */
    function getSettings(req) {
        var settings = {},
            userLang, 
            locale = require('locale'),
            baseURL = require('duality/core').getBaseURL();

        if (this.app_settings) {
            // server side
            settings = this.app_settings;
        } else if (typeof(window) === 'object' && window.jQuery) {
            // client side
            response = window.jQuery.ajax({
                    type: 'GET',
                    url: baseURL + '/app_settings/_design%252Femr',
                    async: false //synchronous request
                }).responseText

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            }
        
            userLang = readCookie("userLang")
            response = "{}"
            settings = JSON.parse(response);
        }

        // add defaults to settings if needed
        for (var k in defaults) {
            if (typeof defaults[k] !== 'undefined') {
                if (typeof settings[k] === 'undefined') {
                    settings[k] = defaults[k];
                }
            }
        }

        // add default translations also if needed
        for (var i in defaults.translations) {
            var d = defaults.translations[i];
            var found = false;
            for (var i in settings.translations) {
                var t = settings.translations[i];
                if (t.key === d.key) {
                    found = true;
                }
            }
            if (!found) {
                if (settings.translations) {
                    settings.translations.push(d);
                } else {
                    settings.translations = [d];
                }
            }
            found = false;
        }

        /*
         * Locale string based on the following priority:
         *      user profile > browser > app_settings > 'en'
         *
         * Only initialize the locale value server side. With kanso request
         * object the cookie can only be checked server side.  Fallback to
         * browser headers otherwise.
         */
        /* flakey, removing temporarly in favor of manual setting */


        if (userLang) {

            // currently supported locales
            var supported = new locale.Locales(Object.keys(settings.locales));

            // locale module chooses best option based on header
            settings.locale = new locale.Locales(
                userLang
            ).best(supported).toString();

        } else if (req && req.headers && req.headers['Accept-Language']) {

            // currently supported locales
            var supported = new locale.Locales(["en", "es", "fr", "ne", "sw"]);

            // locale module chooses best option based on header
            settings.locale = new locale.Locales(
                req.headers["Accept-Language"]
            ).best(supported).toString();

        }

        return settings;
    }

    /*
     * Value is object with locale strings, e.g.
     *
     * {
     *   "en": "Year",
     *   "fr": "Anné"
     * }
     *
     * return string
     */
    function getMessage(value, locale) {
        var key;

        locale = locale || 'en';

        if (_.isObject(value)) {
            // try to resolve locale
            if (value[locale]) {
                // we found specified locale
                return value[locale];
            } else {
                // otherwise return the first value in object
                key = _.first(_.keys(value));

                return value[key] || null; // return null if falsey or empty object
            }
        } else {
            return value;
        }
    }

    /*
     * Translate a given string or translation object based on translations and
     * locale.
     *
     * @param {Array} translations
     * @param {Object|String} key
     * @param {String} locale
     *
     * @return String
    */
    function translate(translations, key, locale, ctx) {
        var value,
            ctx = ctx || {},
            locale = locale || app_settings.locale || 'en';

        if (_.isObject(locale)) {
            ctx = locale;
            locale = app_settings.locale || 'en';
        }

        if (_.isObject(key))
            return getMessage(key, locale) || key;

        value = _.findWhere(translations, {
            key: key
        });

        value = getMessage(value, locale) || key;

        // underscore templates will return ReferenceError if all variables in
        // template are not defined.
        try {
            return _.template(value, ctx);
        } catch(e) {
            return value;
        }
    }

    var muvuku = url.parse(app_settings.muvuku_webapp_url, true);
    muvuku.search = null;
    muvuku.query._sync_url = require('duality/core').getBaseURL() + '/add';

    if (app_settings.gateway_number) {
        muvuku.query._gateway_num = app_settings.gateway_number;
    }

    app_settings.muvuku_webapp_url = url.format(muvuku);
    app_settings.sha = this.kanso && this.kanso.git && this.kanso.git.commit;
    app_settings.translations = app_settings.translations || [];
    app_settings.translate = _.partial(translate, app_settings.translations);
    app_settings.getMessage = getMessage;

    var settings = require('settings/root');
    app_settings.isDistrict = (settings.type === 'district');
    app_settings.isClinic = (settings.type === 'clinic');

    return app_settings;
};
