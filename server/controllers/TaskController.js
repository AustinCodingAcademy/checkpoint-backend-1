let Task = require("../models/TaskModel");

exports.list =  function list(request, response) {
    Task.find().exec().then(c=>{
        return response.json(c);
    });
}
exports.show = function show(request, response) {
    Task.findById(request.params.id).exec().then(c=>{
        return response.json(c);
    });
}
exports.create =  function create(request, response) {
    let newTask = new Task({
        body: request.body.body
    });
    newTask.save();
    return response.json(newTask);
}