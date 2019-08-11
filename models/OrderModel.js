const mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    id: Number,
   orderDate: String,
   orderTime: String,
   amount: String
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;