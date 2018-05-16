const Task = require("../model/Task");

module.exports.list = function (request, response) {
  Task.find({})
    .exec()
    .then((tasks) => {
      return response.json(tasks);
    });
};

module.exports.show = function (request, response) {
  Task.findById({
    id: request.params.id,
  })
    .exec()
    .then((task) => {
      return response.json(task);
    });
};

module.exports.create = function (request, response) {
  const body = request.body;
  console.log(body);
  const newTask = new Task({
    task: body.name,
    date: body.date
  });
  newTask.save().then((task) => {
    return response.json(task);
  });
};
