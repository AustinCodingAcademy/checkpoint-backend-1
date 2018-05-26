const mon = require('mongoose')

const schema = require('../schemas/orderSchema')

module.exports = mon.model('Order',schema)