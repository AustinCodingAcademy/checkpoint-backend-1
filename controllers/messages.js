const Message = require('../models/MesssageModel');

exports.list = function list(req,res){
    Message.find(function(err,messages){
        if(err) 
        return console.log(err);
        else{
            res.json(messages)
        }
    });
};
exports.create = function create(req,res){
    let newMessage = new Message(req.body);
    newMessage.save()
    res.json(newMessage)
};