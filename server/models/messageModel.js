const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    message: String
    });
 var Message = mongoose.model('Message', messageSchema);
 
 module.exports = Message