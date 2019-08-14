let Message = require("../models/messageModel")

exports.list =  function list(req, res) {
    Message.find((e,message)=>{
        return res.json(message);
    });
 }
 exports.show = function show(req, res) {
    Message.findById(req.params.id, (err,message)=>{
        return res.json(message);
    });
 }
 exports.create =  function create(req, res) {
    let newMessage = new Message ({
         name: req.body.name,
         message: req.body.message,
         date: req.body.date
    })
    newMessage.save(()=>{
        return res.json(newMessage);
    });
 }