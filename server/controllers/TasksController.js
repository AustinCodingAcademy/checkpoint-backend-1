const Task = require( "../models/TasksModel.js");
let tasks = [];


const updateData = () => {
  Task.find({}).exec().then(tasksArr => {
    tasks = tasksArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Task.find({}).exec().then(tasksArr => {
    return response.json(tasksArr);
  });
};


module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  const newId = tasks[tasks.length - 1].id + 1;  
  const newTask = new Task(
    {id: newId , task: input.task, date: input.date}
      );
  newTask.save().then(savedTask => {
    updateData();
    return response.json(savedTask);
  });
};


