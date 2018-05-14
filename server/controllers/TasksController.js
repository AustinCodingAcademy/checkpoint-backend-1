const Task = require( "../models/TasksModel.js");
let tasks = [];


const updateData = () => {
  Task.find({}).exec().then(tasksArr => {
    tasks = tasksArr;
    // console.log(tasks);
  });
};

updateData();

module.exports.list = function list(request, response) {
  Task.find({}).exec().then(tasksArr => {
    return response.json(tasksArr);
  });
  // console.log(tasks);
};

module.exports.show = function show(request, response) {
  const newId = request.params.id;
  Task.find({id: newId}).exec().then(taskRes => {
    return response.json(taskRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const newId = tasks[tasks.length - 1].id + 1;  
  const newTask = new Task(
    {id: newId , body: request.body.body, postId: 1}
      );
  newTask.save().then(savedTask => {
    updateData();
    return response.json(savedTask);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
