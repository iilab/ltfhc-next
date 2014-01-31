(function() {
    var getBrowser = function() {

        function testCSS(prop) {
            return prop in document.documentElement.style;
        }

        var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
        var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
        var isSafari = Object.prototype.toString.call(
                            window.HTMLElement).indexOf('Constructor') > 0;
        // At least Safari 3+: "[object HTMLElementConstructor]"
        var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
        var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

        if (isOpera) return 'opera';
        if (isFirefox) return 'firefox';
        if (isSafari) return 'safari';
        if (isChrome) return 'chrome';
        if (isIE) return 'ie';

    }
    var b = getBrowser();
    if (b !== 'chrome' && b !== 'firefox' && b !== 'safari') {
        alert(
            'Warning Kujua Lite does not support your browser.\n'
            + 'Use Firefox, Chrome or Safari.'
        );
    }
})();

var matched, browser;

jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

jQuery.browser = browser;