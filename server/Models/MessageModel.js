const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    name: String,
    date: String,
    message: String
  });

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;