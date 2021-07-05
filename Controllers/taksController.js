const Task = require('../Models/taskModel');

//show all
exports.list = function list(req, res){
    Task.find((e, t)=>{
        return res.json(t);
    });
}
///by id
exports.show = function show(req, res){
    Task.findById(req.params.id, (err, t)=>{
        return res.json(t);
    })
}
//create task
exports.create = function create(req, res){
    let newTask = {
        id: req.body.id,
        task: req.body.task,
        date: req.body.date
    };
    newTask.save(()=>{
        return res.json(newTask);
    });
}