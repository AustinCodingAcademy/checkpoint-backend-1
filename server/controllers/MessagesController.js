const Message = require( "../models/MessagesModel.js");
let messages = [];


const updateData = () => {
  Message.find({}).exec().then(messagesArr => {
    messages = messagesArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Message.find({}).exec().then(messagesArr => {
    return response.json(messagesArr);
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


