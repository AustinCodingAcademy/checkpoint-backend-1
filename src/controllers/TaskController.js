const TaskModel = require("../models/Task");

module.exports.list = function list(request, response) {
  TaskModel.find({}).exec()
  .then(tasks => {
    response.json(tasks);
  });
};

module.exports.show = function show(request, response) {
  TaskModel.findById(request.params.id).exec()
  .then(task => {
    response.json(task);
  });
};

module.exports.create = function create(request, response) {
  const newTask = new TaskModel(request.body);
  newTask.save()
  .then(savedTask => {
    response.json(savedTask);
  });
};