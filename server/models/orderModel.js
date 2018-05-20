const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: String
  },
  amount: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("newOrder", schema);