const messageModel = require("../models/messageModel");

module.exports.list = ((req, res) => {
    messageModel.find({}).exec()
    .then(message => {
        res.json(message)
    })
})

module.exports.show = ((req, res) => {
    messageModel.findById({"_id": req.params.id}).exec()
    .then(message => {
        res.json(message)
    })
})

module.exports.create = ((req, res) => {
    const newMessage = new messageModel({
        name: req.body.name,
        date: new Date(),
        message: req.body.message
    })
    newMessage.save()
    .then(savedMessage => {
        res.json(savedMessage)
    })
})

