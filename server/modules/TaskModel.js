const mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: Number
});
var Task = mongoose.model("Task", taskSchema);
  
module.exports = Task;