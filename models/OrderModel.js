`use strict`

const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: Number
});

let Order = mongoose.model('order', orderSchema);

module.exports = Order