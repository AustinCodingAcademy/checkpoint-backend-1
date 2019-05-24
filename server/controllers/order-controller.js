const Order = require('../models/order-model');

exports.list = (req, res) => {
    Order.find( (err, orders) => {
        if(err) return console.log(err);
        return res.json(orders);
    })
}

exports.show = (req, res) => {
    let id = require('mongodb').ObjectID(req.params.id);
    Order.findById(id, (err, order) => {
        if(err) return console.log(err);
        return res.json(order);
    })
}

exports.create = (req, res) => {
    let body = req.body;
    let order = new Order( {orderDate: body.orderDate, orderTime: body.orderTime, amount: body.amount} )
    order.save((err) => {if(err) return console.log(err)} );
    return res.json(body);
}
