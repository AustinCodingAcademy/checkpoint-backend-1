const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
  name: String,
  date: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;