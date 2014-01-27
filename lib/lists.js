exports.show_list = function(head, req) {
    var row;
    start({
        code: 200,
        headers: {
            'Content-Type': 'text/json; charset=utf-8',
        }
    });
    send('{"$schema": "http://json-schema.org/draft-04/schema#",\n "type": "object", \n"properties": \n{ "thelist": {\n"type":"string", \n"enum ": [\n');
    while (row = getRow()) {
        if (row.key === req.query.l) {
            send(JSON.stringify(row.value.name) + ",\n");
        }
    }
    send("]\n}\n}\n}");
};

exports.show_list2 = function(head, req) {
    var row;
    start({
        code: 200,
        headers: {
            'Content-Type': 'text/json; charset=utf-8',
        }
    });
    send('[');
    while (row = getRow()) {
        if (row.key === req.query.l) {
            send(JSON.stringify(row.value.name) + ",");
        }
    }
    send("]");
};