let Order = require("../models/orderModel");

module.exports.list =  (request, response) => {
    Order.find({}).exec()
    .then(orders => {
        return response.json(orders)
    })
}

module.exports.show =  (request, response) => {
    Order.findById({"_id" : request.params.id}).exec()
    .then(order => {
        response.json(order)
    })
}

module.exports.create =  (request, response) => {
    const newOrder = new Order({
        name: request.body.name,
        orderDate: request.body.orderDate,
        orderTime: Date(),
        amount: request.body.amount
    })
    newOrder.save()
    .then(savedOrder => {
        response.json(savedOrder)
    })
}