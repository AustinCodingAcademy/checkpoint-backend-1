const Message = require('../Models/messagesModel')

exports.list = function list(req,res) {
    Message.find((e,v)=>{
        return res.json(v);
    });
}
  
exports.show = function show(req, res) {
    Message.findById(req.params.id, (err,v)=>{
        return res.json(v);
    });
}

exports.create = function create(req,res) {
    let item = {
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    };
    let newMessage = new Message(item)
    newMessage.save();
}