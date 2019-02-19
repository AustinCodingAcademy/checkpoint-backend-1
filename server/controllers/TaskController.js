const taskModel = require("../models/TaskModel")


 exports.list = function list(request, response) {
    taskModel.find().exec().then((tasks)=>{
        return response.json(tasks);
    })
}

 exports.show = function show(request, response) {
    taskModel.findById(request.params.id).exec().then((task)=>{
        return response.json(task);
    })
}

 exports.create = function create(request, response) {
    const newTask = new taskModel({
        id: request.body.id,
        task: request.body.task,
        date: request.body.date
    })
    newTask.save().then(savedTask => {
        console.log(savedTask)
    })
} 

exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove = function remove(request, response) {
        return response.json({});
}
