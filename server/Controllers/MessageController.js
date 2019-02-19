const MessageModel = require("../Models/MessageModel");

//GET request
exports.list = function list(request, response) {
    MessageModel.find().exec().then((messages) => {
        return response.json(messages);
    })
}

//GET request by ID
exports.show = function show(request, response) {
    MessageModel.findById(request.params.id).exec().then((message) => {
        return response.json(message);
    })
}

//POST request
exports.create = function create(request, response) {
    const newMessage = new MessageModel({
        body: request.body.body
    })
    newMessage.save().then(savedMessage => {
        console.log(savedMessage);
    })
}

//PUT request
exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}