mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a Schema
const MessageSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

})

module.exports = messages = mongoose.model('messages', MessageSchema)