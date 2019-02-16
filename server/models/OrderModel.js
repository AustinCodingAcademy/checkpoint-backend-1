let mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: String
})

module.exports = mongoose.model('Order', orderSchema);