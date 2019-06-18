let Task = require("../models/TaskModels");
var ObjectId = require('monodb').ObjectID;

//Display all messages
exports.list = function(req,res){
    Task.find(function(err,tasks) {
        if (err) return console.error(err);
        return res.json(tasks)
    })
}

//Display one message
exports.show = function(req,res){
    let id = ObjectId(req.params.id);
    Task.findById(id,function(err,task){
        if (err) return console.error(err)
        return res.json(task);
    })
}

//create new message
exports.create = function(req,res){
    let body = req.body;
    let task = new Task( {task: body.task, date: body.date} )
    task.save(function(err,task){
        if (err) return console.error(err)
    });
    return res.json(body);
};