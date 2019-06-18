let Order = require("../models/OrdersModels");
var ObjectId = require('monodb').ObjectID;

//Display all messages
exports.list = function(req,res){
    Order.find(function(err,orders) {
        if (err) return console.error(err);
        return res.json(orders)
    })
}

//Display one message
exports.show = function(req,res){
    let id = ObjectId(req.params.id);
    Order.findById(id,function(err,order){
        if (err) return console.error(err)
        return res.json(order);
    })
}

//create new message
exports.create = function(req,res){
    let body = req.body;
    let order = new order( {orderDate: body.orderDate, orderTime: body.orderTime, amount: body.amount} )
    order.save(function(err,order){
        if (err) return console.error(err)
    });
    return res.json(body);
};