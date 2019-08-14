`use strict`

const TaskModel = require('../models/TaskModel');

exports.list = function list(req, res) {
    TaskModel.find((err, tasks) => {
        if (err) return console.log(err)
        return res.json(tasks);
    });
};
exports.create = function create(req, res) {
    let newTask = new TaskModel(req.body);
    newTask.save()
    res.json(newTask)
};