const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: Number
});

let Order = mongoose.model('Order', orderSchema);


module.exports = Order
