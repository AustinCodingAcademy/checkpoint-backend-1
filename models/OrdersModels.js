const mongoose = require('mongoose');

var orderScehma = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: String
});

var order = mongoose.model('Order', orderScehma);

module.exports = Order;