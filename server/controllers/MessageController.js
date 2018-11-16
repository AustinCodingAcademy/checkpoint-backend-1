const MessageModel = require("../models/MessageModel");
const exports = module.exports;

exports.list = (req, res) => {
   MessageModel.find({}).exec().then(messages => {
      return res.json(messages);
   })
   .catch(err => {
      console.log("Error listing messages", err);
      return res.json(err);
   })
}

exports.show = (req, res) => {
   MessageModel.findById(req.params.id).exec()
   .then(msg => {
      return res.json(msg);
   })
}

exports.create = (req, res) => {
   const message = new MessageModel({
      name: req.body.name,
      date: req.body.date,
      message: req.body.message
   });
   message.save();
   return res.json(message);
}

exports.update = (req, res) => {
   MessageModel.findById(req.params.id).exec()
   .then(msg => {
      msg.name = req.body.name,
      msg.date = req.body.date,
      msg.message = req.body.message;
      msg.save();
      return res.json(msg);
   });
}

exports.remove = (req, res) => {
   MessageModel.findById(req.params.id).exec()
   .then(msg => {
      msg.active = false;
      msg.save();
      return res.json(msg);
   })
}