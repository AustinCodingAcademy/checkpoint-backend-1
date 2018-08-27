const MessageModel = require("../models/MessageModel");

//this shows all messages
module.exports.list =  function list(request, response) {
    MessageModel.find({}).exec()
    .then (messages => {
        //if we're in here that means the data has been retrieved, and now we want to return all the messages
        return response.json(messages);
    });    
};

//this posts a new message
module.exports.create =  function create(request, response) {
    const newMessage = new MessageModel(request.body);
    newMessage.save()
    .then (savedMessage => {
        return response.json(savedMessage)
    });


    // messages.push(request.body);
    // return response.json(request.body);
};

   