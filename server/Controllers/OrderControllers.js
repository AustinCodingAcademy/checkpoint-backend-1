let order= require ("../models/Order");

module.exports.list =  function list(request, response) {
    order.find({}).exec()
    .then(order => {
        response.json(order);
        
    });
   }
   
   
   module.exports.create =  function create(request, response) {
    const newOrder = new order(request.body);
    newOrder.save()
    .then(order =>{
        response.json(order);
    });
   }
   