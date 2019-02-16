const Order = require("../models/OrderModel");

exports.list = function list(request, response) {
    Order.find().exec().then((orders)=>{
        return response.json(orders);
    })
}

exports.show = function show(request, response) {
    Order.findById(request.params.id).exec().then((order)=> {
        return response.json(order);
    })
}

exports.create =  function create(request, response) {
    const newOrder = new Order({
      id: request.body.id,
      orderDate: request.body.orderDate,
      orderTime: request.body.orderTime,
      amount: request.body.amount
    })
    newOrder.save().then(savedOrder=>{
        console.log(savedOrder)
    })    
}

exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove =  function remove(request, response) {
    return response.json({});
}