let Task = require("../models/tasksModel")

exports.list =  function list(req, res) {
   Task.find((err,t)=>{
       return res.json(t);
   });
}
// exports.show = function show(req, res) {
//    Contact.findById(req.params.id, (err,c)=>{
//        return res.json(c);
//    });
// }
exports.create =  function create(req, res) {
    const newTask = new Task({
        id: req.body.id,
        task: req.body.task,
        date: req.body.date
    })
    newTask.save().then(savedTask=>{
        console.log(savedTask)
    })    
}