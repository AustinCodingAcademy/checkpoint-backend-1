let Order = require('../models/orders');

exports.list = function list(req, res) {
    Order.find((err, ord) => {
        err ? res.send(`Error: ${err}`) : res.json(ord);
    })
}

exports.create = function create(req, res) {
    const newOrder = new Order({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    })
    newOrder.save((err, ord) => {
        err ? res.send(`Error: ${err}`) : res.json(ord);
    })
}
