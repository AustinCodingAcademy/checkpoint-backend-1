const mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    id: Number,
   name: String,
   date: String,
   message: String
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message