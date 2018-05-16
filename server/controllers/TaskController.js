const TaskModel = require("../models/TaskModel.js");


module.exports.list = function list(req, res) {
  return TaskModel.find({}).exec().then(tasks => res.json(tasks));
};
module.exports.show = function show(req, res) {
  return TaskModel.findById(req.params.id).exec().then(task => res.json(task)); 
};
module.exports.create = function create(req, res) {
  const newTask = new TaskModel(req.body);
  newTask.save().then(savedTask => res.json(savedTask));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }