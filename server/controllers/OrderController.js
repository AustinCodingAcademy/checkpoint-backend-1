let Order = require("../models/OrderModel.js")
var ObjectId = require('mongodb').ObjectID;

exports.list =  function list(request, response) {
    Order.find(function (err, orders) {
        if (err) return console.error(err);
        return response.json(orders)
    })
}
exports.show = function show(request, response) {
    let id =  ObjectId(request.params.id)
    Order.findById(id, function(err, order) {
        if (err) return console.error(err)
        return response.json(order)
    })
}
exports.create =  function create(request, response) {
    let body  = request.body
    let order = new Order( { orderDate: body.orderDate, orderTime: body.orderTime, amount: body.amount} )
    order.save(function (err, order) {
        if (err) return console.error(err);
    });
    return response.json(body);
}
