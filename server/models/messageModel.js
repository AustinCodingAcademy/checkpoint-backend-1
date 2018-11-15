let mon = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mon.Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    message: {
        type: String
    },
 
});

module.exports =  mon.model("Messages", schema);