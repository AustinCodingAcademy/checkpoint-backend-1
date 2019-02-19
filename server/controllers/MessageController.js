const MessageModel = require("../models/MessageModel");

module.exports.list =  function list(req, res) {
    MessageModel.find({}).exec().then(messages => {
        return res.send(messages);
    }); 
}

module.exports.show =  function show(req, res) {
    MessageModel.findById(req.params.id).exec().then(messages => {
        return res.json(messages);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newMessage= new MessageModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message,
    })
    newMessage.save()
    .then(messages=>{
        res.send(messages)
    })
}

module.exports.update =  function update(req,res,next){
    MessageModel.findById(req.params.id).exec().then(messages => {
        messages.name = "Tom" ;
        messages.date = "Sawyer";
        messages.message = "Painter";
        return messages.save();
    })
    .then(messages => {
        return res.json(messages[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    MessageModel.findById(req.params.id).exec().then(message => {
        message[index].active = false;
        return message.save();
    })
    .then(message => {
        return res.json(message[index]);
    });
}