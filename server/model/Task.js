const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  task: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", schema);
