const MessageModel = require("../models/MessageModel.js");


module.exports.list = function list(req, res) {
  return MessageModel.find({}).exec().then(messages => res.json(messages));
};
module.exports.show = function show(req, res) {
  return MessageModel.findById(req.params.id).exec().then(message => res.json(message)); 
};
module.exports.create = function create(req, res) {
  const newMessage = new MessageModel(req.body);
  newMessage.save().then(savedMessage => res.json(savedMessage));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }