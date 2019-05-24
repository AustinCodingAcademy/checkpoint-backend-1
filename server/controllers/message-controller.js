const Message = require('../models/message-model');

exports.list = (req, res) => {
    Message.find((err, messages) => {
        if(err) return console.log(err);
        return res.json(messages);
    })
}

exports.show = (req, res) => {
    let id = require('mongodb').ObjectID(req.params.id);
    Message.findById(id, (err, message) => {
        if(err) return console.log(err);
        return res.json(message);
    })
}

exports.create = (req, res) => {
    let body = req.body;
    let message = new Message( {name: body.name, date: body.date, message: body.message} );
    message.save((err) => {if(err) return console.log(err)} );
    return res.json(body);
}