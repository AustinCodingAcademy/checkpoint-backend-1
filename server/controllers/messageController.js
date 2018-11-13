const Message = require("../models/messageModel");

module.exports.list = function list(request, response) {
  Message.find({}).exec()
 .then(message => {
   response.json(message);
 });
};

module.exports.show = function show(request, response) {
  Message.findById(request.params.id).exec()
  .then(message => {
    response.json(message);
  });
};
 
module.exports.create = function create(request, response) {
  const newMessage = new Message({
    name: request.body.name,
    date: new Date(),
    message: request.body.message
  })
  newMessage.save()
  .then(savedMessage => {
    response.json(savedMessage);
  });
};
