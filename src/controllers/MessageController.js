const MessageModel = require("../models/Message");

module.exports.list = function list(request, response) {
  MessageModel.find({}).exec()
  .then(messages => {
    response.json(messages);
  });
};

module.exports.show = function show(request, response) {
  MessageModel.findById(request.params.id).exec()
  .then(message => {
    response.json(message);
  });
};

module.exports.create = function create(request, response) {
  const newMessage = new MessageModel(request.body);
  newMessage.save()
  .then(savedMessage => {
    response.json(savedMessage);
  });
};
