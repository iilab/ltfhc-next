var templates = require('duality/templates');


exports.home = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Home',
        content: templates.render('home.html', req, {nav: 'home'})
    };
};

exports.visit = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Visit',
        content: templates.render('visit.html', req, {nav: 'visit'})
    };
};