`use strict`

const MessageModel = require('../models/MessageModel');

exports.list = function list(req, res) {
    MessageModel.find(function (err, messages) {
        if (err) return console.log(err)
        return res.json(messages);
    });
};
exports.create = function create(req, res) {
    let newMessage = new MessageModel(req.body);
    newMessage.save()
    res.json(newMessage)
};

