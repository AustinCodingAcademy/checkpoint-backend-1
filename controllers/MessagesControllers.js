let Message = require("../models/MessagesModels");
var ObjectId = require('monodb').ObjectID;

//Display all messages
exports.list = function(req,res){
    Message.find(function(err,messages) {
        if (err) return console.error(err);
        return res.json(messages)
    })
}

//Display one message
exports.show = function(req,res){
    let id = ObjectId(req.params.id);
    Message.findById(id,function(err,message){
        if (err) return console.error(err)
        return res.json(message);
    })
}

//create new message
exports.create = function(req,res){
    let body = req.body;
    let message = new Message( {name: body.name, date: body.date, message: body.message} )
    message.save(function(err,message){
        if (err) return console.error(err)
    });
    return res.json(body);
};