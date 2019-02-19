const Task = require("../models/TaskModel");

exports.list = function list(request, response) {  
  Task.find(function (err, tasks) {
    if (err) return console.error(err)        
    return response.json(tasks)
  })
}
exports.show = function show(request, response) {
  Task.findById(request.params.id,function (err, tasks) {
    if (err) return console.error(err)        
    return response.json(tasks)
  })
}
exports.create = function create(request, response) {  
  const tempBody = request.body
  const newTask = new Task({
   task: tempBody.task,
   date: tempBody.date
  });
  newTask.save(function (err, tasks) {
    if (err) return console.error(err)        
    return response.json(tasks)
  })
}
exports.update = function update(request, response) {
  // not yet implimented
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  // not yet implimented
  return response.json({});
}