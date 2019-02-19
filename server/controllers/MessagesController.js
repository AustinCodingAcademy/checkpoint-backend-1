// const messages = require("../state");


let MessageModel = require('../models/messageModel');

module.exports.list =  function list(req, res) {
    MessageModel.find({}).exec()
    .then(message => {
        return res.json(message);
    });

   }
module.exports.show =  function show(req, res) {
    MessageModel.findById(req.params.id).exec()
    .then(message => {
        return res.json(message);;
     });
    }

module.exports.create =  function create(req, res) {
    let newMessage = new MessageModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message,
    })
    newMessage.save()
    .then(message=>{
        res.json(message)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   