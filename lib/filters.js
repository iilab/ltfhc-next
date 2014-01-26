exports.user_data = function(doc, req) {
    if (doc.collection === "visits" || doc.collection === "patients") {
        return true;
    }
    return false;
}

exports.system_data = function(doc, req) {
    if (doc.collection === "visits" || doc.collection === "patients") {
        return false;
    }
    return true;
}