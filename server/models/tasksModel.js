const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema ({
    id: Number,
    task: String,
    date: String
})


let Task = mongoose.model('Task', taskSchema);

module.exports = Task;