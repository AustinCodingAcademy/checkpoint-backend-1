const OrdersModel = require("../models/OrdersModel");

module.exports.list =  function list(req, res) {
    OrdersModel.find({}).exec().then(orders => {
        return res.send(orders);
    }); 
}

module.exports.show =  function show(req, res) {
    OrdersModel.findById(req.params.id).exec().then(orders => {
        return res.json(orders);
    });
}
   
module.exports.create =  function create(req,res,next){
    const newOrder= new OrdersModel({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount,
    })
    newOrder.save()
    .then(orders=>{
        res.send(orders)
    })
}

module.exports.update =  function update(req,res,next){
    OrdersModel.findById(req.params.id).exec().then(orders => {
        orders.orderDate = "Tom" ;
        orders.orderTime = "Sawyer";
        orders.amount = "Painter";
        return orders.save();
    })
    .then(orders => {
        return res.json(orders[index]);
    });
}
   
module.exports.remove =  function remove(req,res,next){
    OrdersModel
.findById(req.params.id).exec().then(message => {
        message[index].active = false;
        return message.save();
    })
    .then(message => {
        return res.json(message[index]);
    });
}