// const orders = require("../state");


let OrderModel = require('../models/orderModel');

module.exports.list =  function list(req, res) {
    OrderModel.find({}).exec()
    .then(order => {
        return res.json(order);
    });

   }
module.exports.show =  function show(req, res) {
    OrderModel.findById(req.params.id).exec()
    .then(order => {
        return res.json(order);;
     });
    }

module.exports.create =  function create(req, res) {
    let newOrders= new OrderModel({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount,
    })
    newOrders.save()
    .then(order => {
        res.json(order)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   