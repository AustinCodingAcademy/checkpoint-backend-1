// const tasks = require("../state");


let TaskModel = require('../models/taskModel');

module.exports.list =  function list(req, res) {
    TaskModel.find({}).exec()
    .then(task => {
    
        return res.json(task);
    });

   }
module.exports.show =  function show(req, res) {
    TaskModel.findById(req.params.id).exec()
    .then(task => {
        return res.json(task);;
     });
    }

module.exports.create =  function create(req, res) {
    let newTasks = new TaskModel({
      task: req.body.task,
      date: req.body.date,
    })
    newTasks.save()
    .then(comment=>{
        res.json(comment)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   