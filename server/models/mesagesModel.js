const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema ({
    id: Number,
    name: String,
    date: String,
    message: String
})


let Message = mongoose.model('Message', messageSchema);

module.exports = Message;