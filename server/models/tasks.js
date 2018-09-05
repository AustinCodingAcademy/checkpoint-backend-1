mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a Schema
const TasksSchema = new Schema({
    id:{ 
        type: Number,
        required: true
    },
    task: {
        type: String,
        required: true
    },

    date:{
        type: String,
        required:true
    }
})

module.exports = tasks =  mongoose.model('tasks', TasksSchema)