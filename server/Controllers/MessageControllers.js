let message= require ("../models/message");

module.exports.list =  function list(request, response) {
    message.find({}).exec()
    .then(message => {
        response.json(message);
        
    });
   }
   
   
   module.exports.create =  function create(request, response) {
    const newMessage = new message(request.body);
    newOrder.save()
    .then(message =>{
        response.json(message);
    });
   }
   