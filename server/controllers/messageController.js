let Message = require("../models/messageModel");
const mongoose = require('mongoose');

module.exports.list =  (request, response) => {
    Message.find({}).exec()
    .then(messages => {
        return response.json(messages)
    })
}

module.exports.show =  (request, response) => {
    Message.findById({"_id" : request.params.id}).exec()
    .then(message => {
        response.json(message)
    })
}

module.exports.create =  (request, response) => {
    const newMessage = new Message({
        name: request.body.name,
        date: new Date(),
        message: request.body.message
    })
    newMessage.save()
    .then(savedMessage => {
        response.json(savedMessage)
    })
}

   