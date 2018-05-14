const Order = require( "../models/OrdersModel.js");
let orders = [];


const updateData = () => {
  Order.find({}).exec().then(ordersArr => {
    orders = ordersArr;
    // console.log(orders);
  });
};

updateData();

module.exports.list = function list(request, response) {
  Order.find({}).exec().then(ordersArr => {
    return response.json(ordersArr);
  });
  // console.log(orders);
};

module.exports.show = function show(request, response) {
  const newId = request.params.id;
  Order.find({id: newId}).exec().then(orderRes => {
    return response.json(orderRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const newId = orders[orders.length - 1].id + 1;  
  const newOrder = new Order(
    {id: newId , body: request.body.body, postId: 1}
      );
  newOrder.save().then(savedOrder => {
    updateData();
    return response.json(savedOrder);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
