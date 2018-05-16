const Order = require("../model/Order");

module.exports.list = function (request, response) {
  Order.find({})
    .exec()
    .then((orders) => {
      return response.json(orders);
    });
};

module.exports.show = function (request, response) {
  Order.findById({
    id: request.params.id,
  })
    .exec()
    .then((order) => {
      return response.json(order);
    });
};

module.exports.create = function (request, response) {
  const body = request.body;
  const newTask = new Order({
    id: body.id || new Date().getMilliseconds(),
    orderDate: body.orderDate,
    orderTime: body.orderTime,
    amount: body.amount
  });
  newTask.save().then((order) => {
    return response.json(order);
  });
};
