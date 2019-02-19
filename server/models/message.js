const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    message: String
})

module.exports = mongoose.model('message', messageSchema);