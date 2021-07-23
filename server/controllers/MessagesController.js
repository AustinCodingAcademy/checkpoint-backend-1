const Message = require("../models/MessagesModel");

// get request
module.exports.list = (request, response) => {
    Message.find({}).exec().then((messages) => {
      return response.json(messages);
    });
  };

  // post request
module.exports.create = (request, response) => {
    const m = new Message({
      body: request.body.body
    });
    c.save().then(saveMessage => {
      return response.json(saveMessage);
    });
  };