const taskModel = require('../Models/TaskModel');

//GET request
exports.list = function list (request, response) {
    taskModel.find().exec().then((tasks) => {
        return response.json(tasks);
    })
}
//GET request by Id
exports.show = function show (request, response) {
    taskModel.findById(request.params.id).exec().then((task) => {
        return response.json(task);
    })
}

//POST request
exports.create = function create (request, response) {
    const newTask = new taskModel ({
        body: request.body.body
    })
    newTask.save().then()(savedNewTask => {
        console.log(savedNewTask);
    })
}

//PUT request
exports.update = function update (request, response) {
    return response.json({ theId: request.params.id });
}