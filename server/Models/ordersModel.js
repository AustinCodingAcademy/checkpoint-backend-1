const mongoose = require('mongoose');

let ordersSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: String
});

let Order = mongoose.model('Order', ordersSchema);

module.exports = Order;