let MessageModel = require("../models/MessageModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    MessageModel.find(function (err, message) {
        if (err) return console.error(err);
        return response.json(message);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    MessageModel.findById(request.params.id, function (err, message){
        if (err) return console.error(err);
        return response.json(message);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newMessage = new MessageModel(request.body);
    newMessage.save((err, message) => {
        response.json(message);
    });
}