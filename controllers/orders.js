const Order = require('../models/OrderModel');

exports.list = function list(req,res){
    Order.find(function(err,orders){
        if(err) 
        return console.log(err);
        else{
            res.json(orders)
        }
    });
};
exports.create = function create(req,res){
    let newOrder = new Order(req.body);
    newOrder.save()
    res.json(newOrder)
};