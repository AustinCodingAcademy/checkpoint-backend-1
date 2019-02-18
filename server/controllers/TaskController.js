let Task = require("../models/TaskModel");

exports.list =  function list(request, response) {
    Task.find().exec().then(t=>{
        return response.json(t);
    });
}
exports.show = function show(request, response) {
    Task.findById(request.params.id).exec().then(t=>{
        return response.json(t);
    });
}
exports.create =  function create(request, response) {
    let newTask = new Task({
        id: request.body.id,
        task: request.body.task,
        date: new Date()
    });
    newTask.save();
    return response.json(newTask);
}