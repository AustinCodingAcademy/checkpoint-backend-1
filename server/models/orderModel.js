const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    "name": {
        required: true,
        type: String
    },
    "orderDate": {
        required: true,
        type: String
    },
    "orderTime": {
        required: true,
        type: Date
    },
    "amount":{
        required:true,
        type: Number
    }
});

module.exports = mongoose.model("Order", schema);