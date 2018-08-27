let mongoose = require("mongoose");

/** example of one of the message objects
{
    id: 1,
    name: "Lotti Huikerby",
    date: "2/6/2017",
    message: "Synchronised grid-enabled adapter"
}
 */

const messageSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
});

module.exports =  mongoose.model("Message", messageSchema); // Mongoose will convert this to "messages" to correspond with the appropriate collection in the db

