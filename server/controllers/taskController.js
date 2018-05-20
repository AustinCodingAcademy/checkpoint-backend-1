const taskModel = require("../models/taskModel");

module.exports.list = ((req, res) => {
    task.find({}).exec()
    .then(task=>{
        res.json(task)
    })
})

module.exports.show = ((req, res) => {
    taskModel.findById({"_id": req.params.id}).exec()
    .then(task => {
        res.json(task)
    })
})

module.exports.create = ((req, res)=>{
    const newTask = new task({
      task: req.body.name,
      date: req.body.date
    })
    newTask.save()
    .then(savedTask=>{
      res.json(savedTask)
    })
  })