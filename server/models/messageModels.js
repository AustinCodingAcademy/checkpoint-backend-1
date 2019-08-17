const mongoose = require("mongoose");

let messagesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  date: String,
  message: String
});

let Message = mongoose.model("Message", messagesSchema);

module.exports = Message;
