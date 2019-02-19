let mongoose = require('mongoose');


let taskSchema = new mongoose.Schema({
    id: Number,
    task: String,
    date: String
})

module.exports = mongoose.model('task', taskSchema);