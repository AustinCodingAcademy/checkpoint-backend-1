const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: String
  }, 
  message: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("message", schema);