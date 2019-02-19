var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    message: Sting
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message