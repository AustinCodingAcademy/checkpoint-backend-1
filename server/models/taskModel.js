let mon = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mon.Schema({
    task: {
        type: String
    },
    date: {
        type: String
    },
   
 
});

module.exports =  mon.model("Tasks", schema);