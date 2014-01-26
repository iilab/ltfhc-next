exports.show_list = {
    function(head, req) {
        var row;
        start({
            code: 200,
            headers: {
                'Content-Type': 'text/json; charset=utf-8',
            }
        });
        while (row = getRow()) {
            if (row.collection === req.l) {
                send(JSON.stringify(row.value));
            }
        }
    }
};