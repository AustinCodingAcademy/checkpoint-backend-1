let TaskModel = require("../models/TaskModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    TaskModel.find(function (err, tasks) {
        if (err) return console.error(err);
        return response.json(tasks);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    TaskModel.findById(request.params.id, function (err, task){
        if (err) return console.error(err);
        return response.json(task);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newTask = new TaskModel(request.body);
    newTask.save((err,task) => {
        response.json(task);
    });
}
   