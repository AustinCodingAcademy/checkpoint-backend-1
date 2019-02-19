const messageModel = require("../Models/message")


exports.list = function list(request, response) {
    messageModel.find().exec().then((messages)=>{
        return response.json(messages);
    })
}

exports.show = function show(request, response) {
    messageModel.findById(request.params.id).exec().then((message)=>{
        return response.json(message);
    })
}

exports.create = function create(request, response) {
    const newmessage = new messageModel({
        id: request.body.id,
        name: request.body.name,
        date: request.body.date,
        message: request.body.message
    })
    newmessage.save().then(savedMessage => {
        console.log(savedMessage)
    })
}