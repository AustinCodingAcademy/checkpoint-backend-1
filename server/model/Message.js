const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Message", schema);
