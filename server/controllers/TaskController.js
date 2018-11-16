const TaskModel = require("../models/TaskModel");
const ex = module.exports;

ex.list = (req, res) => {
   TaskModel.find({}).exec().then(tasks => {
      return res.json(tasks);
   })
   .catch(err => {
      console.log("Error listing tasks", err);
      return res.json(err);
   })
}

ex.show = (req, res) => {
   TaskModel.findById(req.params.id).exec()
   .then(task => {
      return res.json(task);
   })
}

ex.create = (req, res) => {
   const task = new TaskModel({
      task: req.body.task,
      date: req.body.date,
   });
   task.save();
   return res.json(task);
}

// ex.update = (req, res) => {
//    TaskModel.findById(req.params.id).exec()
//    .then(task => {
//       task.task = req.body.task,
//       task.date = req.body.date,
//       task.save();
//       return res.json(task);
//    });
// }

// ex.remove = (req, res) => {
//    TaskModel.findById(req.params.id).exec()
//    .then(task => {
//       task.active = false;
//       task.save();
//       return res.json(task);
//    })
// }