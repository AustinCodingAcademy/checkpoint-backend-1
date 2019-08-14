`use strict`

const OrderModel = require('../models/OrderModel');

exports.list = function list(req, res) {
    OrderModel.find(function (err, orders) {
        if (err) return console.log(err)
        return res.json(orders);
    });
};
exports.create = function create(req, res) {
    let newOrder = new OrderModel(req.body);
    newOrder.save()
    res.json(newOrder)
};