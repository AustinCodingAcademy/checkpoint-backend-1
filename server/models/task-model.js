const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    task: String,
    date: String
})

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;