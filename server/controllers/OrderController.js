let Order = require("../models/OrderModel");

exports.list =  function list(request, response) {
    Order.find().exec().then(o=>{
        return response.json(o);
    });
}
exports.show = function show(request, response) {
    Order.findById(request.params.id).exec().then(o=>{
        return response.json(o);
    });
}
exports.create =  function create(request, response) {
    let newOrder = new Order({
        id: request.body.id,
        orderDate: request.body.orderDate,
        orderTime: request.body.orderTime,
        amount: request.body.amount
    });
    newOrder.save();
    return response.json(newOrder);
}