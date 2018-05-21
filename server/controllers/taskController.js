const Task = require("../models/taskModel");

module.exports.list = ((req, res) => {
    Task.find({}).exec()
    .then(tasks => {
        res.json(tasks)
    })
})

module.exports.show = ((req, res) => {
    Task.findById(req.params.id).exec()
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