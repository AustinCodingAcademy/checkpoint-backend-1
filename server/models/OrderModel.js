var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: Sting
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order