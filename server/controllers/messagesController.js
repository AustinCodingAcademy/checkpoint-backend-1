let messages = require('../models/messages')

module.exports.list = function list(req, res) {
    messages.find({}, (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send(data)
        }
    })
}

module.exports.create = function create(req, res) {
    const newMessages = new messages({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    })
    newMessages.save().then(message => res.json(message))
}