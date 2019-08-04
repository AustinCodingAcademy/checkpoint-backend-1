let OrderModel = require("../models/OrderModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    OrderModel.find(function (err, orders) {
        if (err) return console.error(err);
        return response.json(orders);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    OrderModel.findById(request.params.id, function (err, order){
        if (err) return console.error(err);
        return response.json(order);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newOrder = new OrderModel({
      id: request.body.id,
      orderDate: request.body.orderDate,
      orderTime: request.body.orderTime,
      amount: request.body.amount
    })
    newOrder.save().then(savedOrder=>{
        console.log(savedOrder)
    })    
}