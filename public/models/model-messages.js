let mongoose = require('mongoose')

let messageSchema = new mongoose.Schema({
    name: String,
    date: String,
    message: String
})

Message = mongoose.model('Message', messageSchema)

//Mass Upload
// let state = require('../../server/state').messages
// Message.insertMany(state, function(err, docs){})

module.exports = Message