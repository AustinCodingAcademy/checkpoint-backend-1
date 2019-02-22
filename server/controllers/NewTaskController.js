const records = require("../csvConverter");


exports.list = function list(request, response) {
    records.then(function(value) {
        return response.json(value[0]["new_tasks"]);    
    });    
}
