let Message = require("../models/messageModel")

exports.list =  function list(request, response) {
   Message.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   Message.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newMessage = new Message ({
        id: request.body.id,
        name: request.body.name,
        date: request.body.date,
        message: request.body.message
   })
   newMessage.save(()=>{
       return response.json(newMessage);
   });
}