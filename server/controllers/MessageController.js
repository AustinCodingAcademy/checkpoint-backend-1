const Message = require("../models/MessageModel");

exports.list = function list(request, response) {  
  Message.find(function (err, messages) {
    if (err) return console.error(err) 
    console.log(messages)
    return response.json(messages)
  })
}
exports.show = function show(request, response) {
  Message.findById(request.params.id,function (err, messages) {
    if (err) return console.error(err)        
    return response.json(messages)
  })
}
exports.create = function create(request, response) {  
  const tempBody = request.body
  const newOrder = new Order({
  name: tempBody.name,
  date: tempBody.date,
  message: tempBody.message

  });
  newMessage.save(function (err, messages) {
    if (err) return console.error(err)        
    return response.json(messages)
  })
}
exports.update = function update(request, response) {
  // not yet implimented
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  // not yet implimented
  return response.json({});
}