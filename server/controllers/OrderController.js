const Order = require("../models/OrderModel");

exports.list = function list(request, response) {  
  Order.find(function (err, orders) {
    if (err) return console.error(err) 
    return response.json(orders)
  })
}
exports.show = function show(request, response) {
  Order.findById(request.params.id,function (err, orders) {
    if (err) return console.error(err)        
    return response.json(orders)
  })
}
exports.create = function create(request, response) {  
  const tempBody = request.body
  const newOrder = new Order({
  name: tempBody.name,
  date: tempBody.date,
  message: tempBody.message

  });
  newOrder.save(function (err, orders) {
    if (err) return console.error(err)        
    return response.json(orders)
  })
}
exports.update = function update(request, response) {
  // not yet implimented
  return response.json({theId: request.params.id});
}
exports.remove = function remove(request, response) {
  // not yet implimented
  return response.json({});
}