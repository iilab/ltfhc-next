exports.docs_by_collection = {
    map: function (doc) {
        if (doc.collection) {
            emit(doc.collection, null);
        }
    }
};