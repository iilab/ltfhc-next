module.exports = {
    rewrites: require('./rewrites'),
    views: require('./views'),
    lists: require('./lists'),
    shows: require('./shows'),
    filters: require('./filters'),
    updates: require('./updates'),
    validate_doc_update: require('./validate')
};

require('./events');