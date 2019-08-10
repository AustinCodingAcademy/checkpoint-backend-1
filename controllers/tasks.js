const Task = require('../models/TaskModel');

exports.list = function list(req,res){
    Task.find(function(err,tasks){
        if(err) 
        return console.log(err);
        else{
            res.json(tasks)
        }
    });
};
exports.create = function create(req,res){
    let newTask = new Task(req.body);
    newTask.save()
    res.json(newTask)
};