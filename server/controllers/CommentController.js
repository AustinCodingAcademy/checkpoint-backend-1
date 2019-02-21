const records = require("../csvConverter");


exports.list = function list(request, response) {

    console.log('here' + (JSON.stringify(records)));
    return response.json(records);

}
