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

// module.exports.show = function show(request, response) {
//   const newId = request.params.id;
//   Task.find({id: newId}).exec().then(taskRes => {
//     return response.json(taskRes[0]);
//   });
// };

module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  console.log(input);
  
  const newId = tasks[tasks.length - 1].id + 1;  
  const newTask = new Task(
    {id: newId , task: input.task, date: input.date}
      );
  newTask.save().then(savedTask => {
    updateData();
    return response.json(savedTask);
  });
};


