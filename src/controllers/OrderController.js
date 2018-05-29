const OrderModel = require("../models/Order");

module.exports.list = function list(request, response) {
  OrderModel.find({}).exec()
  .then(orders => {
    response.json(orders);
  });
};

module.exports.show = function show(request, response) {
  OrderModel.findById(request.params.id).exec()
  .then(order => {
    response.json(order);
  });
};

module.exports.create = function create(request, response) {
  const newOrder = new OrderModel(request.body);
  newOrder.save()
  .then(savedOrder => {
    response.json(savedOrder);
  });
};
