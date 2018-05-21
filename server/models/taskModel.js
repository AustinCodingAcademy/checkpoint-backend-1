const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  task: {
    required: true,
    type: String
  },
  date: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("task", schema);