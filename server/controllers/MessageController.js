var Message = require("../models/MessageModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var numberOfMessages = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Message, (result) => {
        numberOfMessages = result.length;
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["id"] = numberOfMessages + 1;
    let tempRecord = new Message(tempBody);
    tempRecord.save();
    exports.list;
    return response.json(tempRecord);
}
