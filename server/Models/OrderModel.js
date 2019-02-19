const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: String
  });

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;