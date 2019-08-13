let Task = require('../models/tasks');

exports.list = function list(req, res) {
    Task.find((err, task) => {
        err ? res.send(`Error: ${err}`) : res.json(task);
    })
}

exports.create = function create(req, res) {
    const newTask = new Task({
       task: req.body.task,
       date: req.body.date 
    })
    newTask.save((err, task) => {
        err ? res.send(`Error: ${err}`) : res.json(task);
    })
}
