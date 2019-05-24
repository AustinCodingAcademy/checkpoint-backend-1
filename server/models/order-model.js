const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: String
})

let Order = mongoose.model('Order', orderSchema);

module.exports = Order;