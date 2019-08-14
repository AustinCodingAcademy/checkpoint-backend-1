let order = require("../models/orderModel")

exports.list =  function list(req, res) {
    order.find((e,order)=>{
        return res.json(order);
    });
 }
 exports.show = function show(req, res) {
    order.findById(req.params.id, (err,order)=>{
        return res.json(order);
    });
 }
 exports.create =  function create(req, res) {
    let newOrder = new order ({
         orderDate: req.body.orderDate,
         orderTime: req.body.orderTime,
         amount: req.body.amount,
    })
    newOrder.save(()=>{
        return res.json(newOrder);
    });
 }