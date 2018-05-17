const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  task: {
    required: true,
    type: String
  },
  date: {
    require: true,
    type: String
  }
});

module.exports = mongoose.model("Task", schema);
