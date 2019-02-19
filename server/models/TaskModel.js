var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task