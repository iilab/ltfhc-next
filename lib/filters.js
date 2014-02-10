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