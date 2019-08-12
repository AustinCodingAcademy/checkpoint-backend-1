const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema ({
    id: Number,
    orderDate: String,
    orderTime: String,
    amount: String
})


let Order = mongoose.model('Order', orderSchema);

module.exports = Order;