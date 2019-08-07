const mongoose = require('mongoose');

let tasksSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: String
});

let Task = mongoose.model('Task', tasksSchema);

module.exports = Task;