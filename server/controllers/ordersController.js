let orders = require('../models/orders')

module.exports.list = function list(req, res) {
    orders.find({}, (err, order) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send(order)
        }
    })
}

module.exports.create = function create(req, res) {
    const neworders = new orders({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    })
    neworders.save().then(orders => res.json(orders))
}