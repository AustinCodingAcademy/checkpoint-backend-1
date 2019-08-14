let Task = require("../models/taskModel")

exports.list =  function list(req, res) {
   Task.find((e,task)=>{
       return res.json(task);
   });
}
exports.show = function show(req, res) {
   Task.findById(req.params.id, (err,task)=>{
       return res.json(task);
   });
}
exports.create =  function create(req, res) {
   let newTask = new Task ({
        task: req.body.task,
        date: req.body.date,
   })
   newTask.save(()=>{
       return res.json(newTask);
   });
}