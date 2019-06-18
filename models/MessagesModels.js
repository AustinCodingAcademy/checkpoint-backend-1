const mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    name: String,
    date: String,
    message: String
});

var Message = mongoose.model('Model', messageSchema);

module.exports = Message;