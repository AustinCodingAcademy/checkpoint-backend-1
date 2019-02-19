const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  task: String,
  date: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;