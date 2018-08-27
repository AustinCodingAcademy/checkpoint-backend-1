const TaskModel = require("../models/TaskModel");

//this shows all tasks
module.exports.list =  function list(request, response) {
    TaskModel.find({}).exec()
    .then(tasks => {
        //if we're in here that means the data has been retrieved, and now we want to return all the tasks
        return response.json(tasks);
    });    
};

//this posts a new task
module.exports.create =  function create(request, response) {
    const newTask = new TaskModel(request.body);
    newTask.save()
    .then (savedTask => {
        return response.json(savedTask)
    });
};
