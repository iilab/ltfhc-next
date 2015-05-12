exports.user_data = function(doc, req) {
    if (doc.collection == "visits" || doc.collection == "patients" || doc.collection == "reports") {
        return true;
    }
    return false;
}

exports.system_data = function(doc, req) {
    if (doc.collection === "visits" || doc.collection === "patients" || doc.collection == "reports") {
        return false;
    }
    return true;
}

exports.approved_reports = function (doc, req) {
    return (
        doc.collection === 'reports' &&
        doc.class === 'entry' &&
        doc.status === 'Approved'
    );
};
