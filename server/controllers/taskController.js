// Connect to data (i.e. Model)
const Task = require('../models/taskModel')

module.exports.list = ((req,res)=>{
  Task.find({}).exec()
  .then(tasks=>{
    res.json(tasks)
  })
})

module.exports.show = ((req, res)=>{
  Task.findById({"_id":req.params.id}).exec()
  .then(task=>{
    res.json(task)
  })
})

module.exports.create = ((req, res)=>res.json({}))

module.exports.update = ((req, res)=>res.json({theId: req.params.id}))

module.exports.remove = ((req, res)=>res.json({}))