const Message = require("../models/message");

 exports.list = function list(request, response) {
    Message.find().exec().then((messages)=>{
        return response.json(messages);
    })
}

 exports.show = function show(request, response) {
    Message.findById(request.params.id).exec().then((message)=> {
        return response.json(message);
    })
}

 exports.create =  function create(request, response) {
    const newMessage = new Message({
      id: request.body.id,
      name: request.body.name,
      date: request.body.date,
      message: request.body.message
    })
    newMessage.save().then(savedMessage=>{
        console.log(savedMessage)
    })    
}

 exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

 exports.remove =  function remove(request, response) {
    return response.json({});
} 