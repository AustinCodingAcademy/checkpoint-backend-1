const MessageModel = require("../models/MessageModel");

module.exports.list = (req, res)=>{
    MessageModel.find({}).exec().then((messages)=>{
        return res.json(messages)
    })
}
module.exports.show = (req, res)=>{
    MessageModel.findById(req.params.id).exec().then((message)=>{
        return res.json(message)
    })
}
module.exports.create = (req, res)=>{
    const m = new MessageModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    });
    m.save().then(savedMessage=>{
        return res.json(savedMessage)
    })
}
module.exports.update = (req, res)=>{
    return res.json({theId: req.params.id});
}
module.exports.remove = (req, res)=>{
    return res.json({})
}