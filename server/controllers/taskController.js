const Task = require("../models/taskModel");

module.exports.list = function list(request, response) {
  Task.find({}).exec()
 .then(task => {
   response.json(task);
 });
};

module.exports.show = function show(request, response) {
  Task.findById(request.params.id).exec()
  .then(task => {
    response.json(task);
  });
};
 
module.exports.create = function create(request, response) {
  const newTask = new Task({
    date: request.body.date,
    task: request.body.task
  })
  newTask.save()
  .then(savedTask => {
    response.json(savedTask);
  });
};
