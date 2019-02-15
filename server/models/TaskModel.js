const mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: String
})

module.exports = mongoose.model('Task', taskSchema);