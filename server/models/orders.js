const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ordersSchema = new Schema ({

})

let Order = mongoose.model('Order', ordersSchema);

module.exports = Order;
