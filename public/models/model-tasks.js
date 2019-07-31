
let mongoose = require('mongoose')

let taskSchema = new mongoose.Schema({
    task: String,
    date: String
})

Task = mongoose.model('Task', taskSchema)

//Mass Upload
// let state = require('../../server/state').tasks
// Task.insertMany(state, function(err, docs){})

module.exports = Task