const orderModel = require("../models/orderModel");

module.exports.list = ((req,res) => {
    prderModel.find({}).exec()
    .then(orders => {
      res.json(orders)
    })
  })
  
  module.exports.show = ((req, res) => {
    orderModel.findById({"_id":req.params.id}).exec()
    .then(order => {
      res.json(order)
    })
  })
  
  module.exports.create = ((req, res) => {
    const newOrder = new Order({
      orderDate: Date(),
      orderTime: Date(),
      amount: req.body.amount
    })
    newOrder.save()
    .then(savedOrder => {
      res.json(savedOrder)
    })
  })