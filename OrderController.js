const OrderModel = require("../models/OrderModel");

//this shows all orders
module.exports.list =  function list(request, response) {
    OrderModel.find({}).exec()
    .then (orders => {
        //if we're in here that means the data has been retrieved, and now we want to return all the orders
        return response.json(orders);
    });    
};

//this posts a new order
module.exports.create =  function create(request, response) {
    const newOrder = new OrderModel(request.body);
    newOrder.save()
    .then (savedOrder => {
        return response.json(savedOrder)
    });
};
  
