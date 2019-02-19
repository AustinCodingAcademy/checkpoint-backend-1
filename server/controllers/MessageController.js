const messageModel = require("../models/MessageModel")


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
        message: request.body.message,
        date: request.body.date
    })
    newmessage.save().then(savedmessage => {
        console.log(savedmessage)
    })
} 

exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove = function remove(request, response) {
        return response.json({});
}
