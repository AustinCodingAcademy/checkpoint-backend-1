const TasksModel = require("../models/TasksModel");

module.exports.list =  function list(req, res) {
    TasksModel.find({}).exec().then(tasks => {
        return res.send(tasks);
    }); 
}

module.exports.show =  function show(req, res) {
    TasksModel.findById(req.params.id).exec().then(tasks => {
        return res.json(tasks);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newTask= new TasksModel({
        id: req.body.id,
        date: req.body.date,
        task: req.body.task,
    })
    newTask.save()
    .then(tasks=>{
        res.send(tasks)
    })
}

module.exports.update =  function update(req,res,next){
    TasksModel.findById(req.params.id).exec().then(tasks => {
        tasks.id = "Tom" ;
        tasks.date = "Sawyer";
        tasks.task = "Painter";
        return tasks.save();
    })
    .then(tasks => {
        return res.json(tasks[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    TasksModel.findById(req.params.id).exec().then(task => {
        task[index].active = false;
        return task.save();
    })
    .then(task => {
        return res.json(task[index]);
    });
}