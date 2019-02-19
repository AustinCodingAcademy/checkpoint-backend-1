const mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: String
})

module.exports = mongoose.model('order', orderSchema);