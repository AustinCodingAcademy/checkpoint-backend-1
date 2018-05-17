const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  name: {
    required: true,
    type: String
  },
  date: {
    require: true,
    type: String
  },
  message: {
    require: true,
    type: String
  }
});

module.exports = mongoose.model("Message", schema);
