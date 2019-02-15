let Order = require("../models/OrderModel");

exports.list =  function list(request, response) {
    Order.find().exec().then(c=>{
        return response.json(c);
    });
}
exports.show = function show(request, response) {
    Order.findById(request.params.id).exec().then(c=>{
        return response.json(c);
    });
}
exports.create =  function create(request, response) {
    let newOrder = new Order({
        body: request.body.body
    });
    newOrder.save();
    return response.json(newOrder);
}