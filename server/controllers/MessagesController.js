const Message = require( "../models/MessagesModel.js");
let messages = [];


const updateData = () => {
  Message.find({}).exec().then(messagesArr => {
    messages = messagesArr;
    // console.log(messages);
  });
};

updateData();

module.exports.list = function list(request, response) {
  Message.find({}).exec().then(messagesArr => {
    return response.json(messagesArr);
  });
  // console.log(messages);
};

module.exports.show = function show(request, response) {
  const newId = request.params.id;
  Message.find({id: newId}).exec().then(messageRes => {
    return response.json(messageRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const newId = messages[messages.length - 1].id + 1;  
  const newMessage = new Message(
    {id: newId , body: request.body.body, postId: 1}
      );
  newMessage.save().then(savedMessage => {
    updateData();
    return response.json(savedMessage);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
