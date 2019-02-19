let mon = require("mongoose");



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