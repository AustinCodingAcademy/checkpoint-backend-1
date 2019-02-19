let mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    message: String
})

module.exports = mongoose.model('Message', messageSchema);