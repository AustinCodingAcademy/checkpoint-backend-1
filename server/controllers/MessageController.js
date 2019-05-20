let Message = require("../models/MessageModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Message.find(function (err, messages) {
        if (err) return console.error(err);
        return response.json(messages)
    })
}
exports.show = function show(request, response) {
    let id =  ObjectId(request.params.id)
    Message.findById(id, function(err, message) {
        if (err) return console.error(err)
        return response.json(message)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let message = new Message( { name: body.name, date: body.date, message: body.message} )
    message.save(function (err, message) {
        if (err) return console.error(err);
    });
    return response.json(body);
}
