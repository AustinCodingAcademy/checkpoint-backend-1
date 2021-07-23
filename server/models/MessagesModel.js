const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    body: {
      type: String
    }
  });
  
  // model
  const Message = mongoose.model("Message", messageSchema);
  
  module.exports = Message;