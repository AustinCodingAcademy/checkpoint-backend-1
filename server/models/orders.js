const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ordersSchema = new Schema ({
    orderDate: String,
    orderTime: String,
    amount: String
})

let Order = mongoose.model('Order', ordersSchema);

module.exports = Order;
