const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    name: String,
    date: String,
    message: String
});

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;