let Message = require("../models/MessageModel");

exports.list =  function list(request, response) {
    Message.find().exec().then(m=>{
        return response.json(m);
    });
}
exports.show = function show(request, response) {
    Message.findById(request.params.id).exec().then(m=>{
        return response.json(m);
    });
}
exports.create =  function create(request, response) {
    let newMessage = new Message({
        id: request.body.id,
        name: request.body.name,
        date: request.body.date,
        message: request.body.message
    });
    newMessage.save();
    return response.json(newMessage);
}