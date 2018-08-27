let mongoose = require("mongoose");

/** example of one of the task objects
{
    id: 1,
    task: "VDI",
    date: "11/4/2016"
}
*/

const modelSchema = new mongoose.Schema({
    task: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    }
});

module.exports =  mongoose.model("Task", modelSchema); // Mongoose will convert this to "tasks" to correspond with the appropriate collection in the db