let Order = require("../models/orderModel")

exports.list =  function list(request, response) {
   Order.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   Order.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newOrder = new Order ({
        id: request.body.id,
        orderDate: request.body.orderDate,
        orderTime: request.body.orderTime,
        amount: request.body.amount
   })
   newOrder.save(()=>{
       return response.json(newOrder);
   });
}