var duality = require('duality/core')

exports.load = function(path) {
    var result,
        baseURL = duality.getBaseURL()
            
    var request = new XMLHttpRequest();
    request.open('GET', baseURL + '/schema/' + path + ".json", false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 404) {
        throw "schema: " + baseURL + '/schema/' + path + ".json does not exist. 404."

    }
    else if (request.status === 200) {
      result = request.responseText;
    }
        
    return JSON.parse(result)
}