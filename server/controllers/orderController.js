const Order = require("../models/orderModel");

module.exports.list = function list(request, response) {
  Order.find({}).exec()
 .then(order => {
   response.json(order);
 });
};

module.exports.show = function show(request, response) {
  Order.findById(request.params.id).exec()
  .then(order => {
    response.json(order);
  });
};
 
module.exports.create = function create(request, response) {
  const newOrder = new Order({
    orderDate: Date(),
    orderTime: Date(),
    amount: request.body.amount
  })
  newOrder.save()
  .then(savedOrder => {
    response.json(savedOrder);
  });
};
