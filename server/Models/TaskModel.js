const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: String,
    date: String,
  });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;