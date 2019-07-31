let mongoose = require('mongoose')

let orderSchema = new mongoose.Schema({
    orderDate: String,
    orderTime: String,
    amount: String
})

Order = mongoose.model('Order', orderSchema)

//Mass Upload
// let state = require('../../server/state').orders
// Order.insertMany(state, function(err, docs){})

module.exports = Order