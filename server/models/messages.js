const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    name: String,
    date: Date,
    message: String
})

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;