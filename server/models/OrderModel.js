const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  orderDate: String,
  orderTime: String,
  amount: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;