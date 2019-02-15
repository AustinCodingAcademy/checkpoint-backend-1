let Message = require("../models/MessageModel");

exports.list =  function list(request, response) {
    Message.find().exec().then(c=>{
        return response.json(c);
    });
}
exports.show = function show(request, response) {
    Message.findById(request.params.id).exec().then(c=>{
        return response.json(c);
    });
}
exports.create =  function create(request, response) {
    let newMessage = new Message({
        body: request.body.body
    });
    newMessage.save();
    return response.json(newMessage);
}