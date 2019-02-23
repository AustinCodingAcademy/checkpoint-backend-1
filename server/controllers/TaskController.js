var Task = require("../models/TaskModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var numberOfTasks = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Task, (result) => {
        numberOfTasks = result.length;
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["id"] = numberOfTasks + 1;
    let tempRecord = new Task(tempBody);
    tempRecord.save();
    exports.list;
    return response.json(tempRecord);
}
