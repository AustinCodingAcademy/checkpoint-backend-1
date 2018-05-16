const Order = require( "../models/OrdersModel.js");
let orders = [];


const updateData = () => {
  Order.find({}).exec().then(ordersArr => {
    orders = ordersArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Order.find({}).exec().then(ordersArr => {
    return response.json(ordersArr);
  });
};


module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  const newId = orders[orders.length - 1].id + 1;  
  const newOrder = new Order(
    {id: newId , orderDate: input.orderDate, orderTime: input.orderTime, amount: input.amount}
      );
  newOrder.save().then(savedOrder => {
    updateData();
    return response.json(savedOrder);
  });
};

