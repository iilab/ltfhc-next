var templates = require('duality/templates');

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
          send(JSON.stringify(row.value) + ",");
    }
    send("]");
};


exports.datatables = function(head, req) {
    var row,
		idx=0;
		
    start({
        code: 200,
        headers: {
            'Content-Type': 'text/json; charset=utf-8',
        }
    });
    send('{"sEcho": ' + req.query.sEcho + ',"iTotalRecords": ' + head.total_rows + ',"iTotalDisplayRecords":' + head.total_rows + ',');
	send('"aaData": [')
	row=getRow()
	if (row) {
		var res = Array()
		for (var val in row.value) {
			 res.push(row.value[val].toString())
		}
		send(JSON.stringify(res))
		while (row = getRow()) {
			var res = Array()
			send(",")
			for (var val in row.value) {
				 res.push(row.value[val].toString())
			}
			send(JSON.stringify(res))
		}
	}
    send("]}");
};