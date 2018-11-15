let mon = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mon.Schema({
    orderDate: {
        type: String
    },
    orderTime: {
        type: String
    },
    amount: {
        type: String
    }
 
});

module.exports =  mon.model("Orders", schema);