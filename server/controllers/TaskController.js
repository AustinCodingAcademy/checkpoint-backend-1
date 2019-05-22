let Task = require("../models/TaskModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Task.find(function (err, tasks) {
        if (err) return console.error(err);
        return response.json(tasks)
    })
}
exports.show = function show(request, response) {
    let id =  ObjectId(request.params.id)
    Task.findById(id, function(err, task) {
        if (err) return console.error(err)
        return response.json(task)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let task = new Task( { task: body.task, date: body.date} )
    task.save(function (err, task) {
        if (err) return console.error(err);
    });
    return response.json(body);
}