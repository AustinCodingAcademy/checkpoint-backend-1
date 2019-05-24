const Task = require('../models/task-model');

exports.list = function(req, res) {
    Task.find((err, tasks) => {
        if(err) return console.log(err);
        return res.json(tasks);
    })
}

exports.show = function(req, res) {
    let id = require('mongodb').ObjectID(req.params.id);
    Task.findById(id, (err, messages) => {
        if(err) return console.log(err);
        return res.json(messages);
    })
}

exports.create = (req, res) => {
    let body = req.body;
    let task = new Task( {task: body.task, date: body.date} )
    task.save( (err) => {if(err) return console.log(err)} )
    return res.json(body);
}
