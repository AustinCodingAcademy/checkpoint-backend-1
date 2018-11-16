const TaskModel = require("../models/TaskModel");
const exports = module.exports;

exports.list = (req, res) => {
   TaskModel.find({}).exec().then(tasks => {
      return res.json(tasks);
   })
   .catch(err => {
      console.log("Error listing tasks", err);
      return res.json(err);
   })
}

exports.show = (req, res) => {
   TaskModel.findById(req.params.id).exec()
   .then(task => {
      return res.json(task);
   })
}

exports.create = (req, res) => {
   const task = new TaskModel({
      name: req.body.task,
      date: req.body.date,
   });
   task.save();
   return res.json(task);
}

exports.update = (req, res) => {
   TaskModel.findById(req.params.id).exec()
   .then(task => {
      task.task = req.body.task,
      task.date = req.body.date,
      task.save();
      return res.json(task);
   });
}

exports.remove = (req, res) => {
   TaskModel.findById(req.params.id).exec()
   .then(task => {
      task.active = false;
      task.save();
      return res.json(task);
   })
}