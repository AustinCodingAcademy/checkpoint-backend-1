const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    id: Number,
   task: String,
   date: String
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task