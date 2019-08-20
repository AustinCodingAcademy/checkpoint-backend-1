let Message = require("../models/messageModels");

exports.list = function list(req, res) {
  Message.find((err, m) => {
    return res.json(m);
  });
};

exports.create = function create(req, res) {
  let item = {
    id: req.body.id,
    name: req.body.name,
    date: req.body.date,
    message: req.body.message
  };
  let newMessage = new Message(item);
  newMessage.save();
};
