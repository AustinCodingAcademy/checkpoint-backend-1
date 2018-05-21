let Task = require("../models/taskModel");

module.exports.list =  (request, response) => {
    Task.find({}).exec()
    .then(tasks => {
        return response.json(tasks)
    })
}

module.exports.show =  (request, response) => {
    Task.findById({"_id" : request.params.id}).exec()
    .then(task => {
        response.json(task)
    })
}

module.exports.create =  (request, response) => {
    const newTask = new Task({
        task: request.body.task,
        date: request.body.date
    })
    newTask.save().then(savedTask => {
        response.json(savedTask)
    })
}