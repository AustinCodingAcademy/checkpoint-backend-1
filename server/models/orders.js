mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a Schema
const OrdersSchema = new Schema({
    orderDate: {
        type: String,
        required: true
    },

    orderTime: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }

})

module.exports = orders = mongoose.model('orders', OrdersSchema)