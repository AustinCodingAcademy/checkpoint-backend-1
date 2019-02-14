const MessageModel = require("../models/MessageModel");
const ex = module.exports;

ex.list = (req, res) => {
   MessageModel.find({}).exec().then(messages => {
      return res.json(messages);
   })
   .catch(err => {
      console.log("Error listing messages", err);
      return res.json(err);
   })
}

ex.show = (req, res) => {
   MessageModel.findById(req.params.id).exec()
   .then(msg => {
      return res.json(msg);
   })
}

ex.create = (req, res) => {
   const message = new MessageModel({
      name: req.body.name,
      date: req.body.date,
      message: req.body.message
   });
   message.save();
   return res.json(message);
}

// ex.update = (req, res) => {
//    MessageModel.findById(req.params.id).exec()
//    .then(msg => {
//       msg.name = req.body.name,
//       msg.date = req.body.date,
//       msg.message = req.body.message;
//       msg.save();
//       return res.json(msg);
//    });
// }

// ex.remove = (req, res) => {
//    MessageModel.findById(req.params.id).exec()
//    .then(msg => {
//       msg.active = false;
//       msg.save();
//       return res.json(msg);
//    })
// }