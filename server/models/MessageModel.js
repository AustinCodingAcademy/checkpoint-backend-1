const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = Message = mongoose.model("Message", messageSchema);