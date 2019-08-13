let Message = require('../models/messages');

exports.list = function list(req, res) {
    Message.find((err, mes) => {
        err ? res.send(`Error: ${err}`) : res.json(mes);
    })
}

exports.create = function create(req, res) {
    const newMessage = new Message({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    })
    newMessage.save((err, mes) => {
        err ? res.send(`Error: ${err}`) : res.json(mes);
    })
}
