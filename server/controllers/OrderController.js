const OrderModel = require("../models/OrderModel");
const exports = module.exports;

exports.list = (req, res) => {
   OrderModel.find({}).exec().then(orders => {
      return res.json(orders);
   })
   .catch(err => {
      console.log("Error listing orders", err);
      return res.json(err);
   })
}

exports.show = (req, res) => {
   OrderModel.findById(req.params.id).exec()
   .then(order => {
      return res.json(order);
   })
}

exports.create = (req, res) => {
   const order = new OrderModel({
      name: req.body.orderDate,
      date: req.body.orderTime,
      order: req.body.amount
   });
   order.save();
   return res.json(order);
}

exports.update = (req, res) => {
   OrderModel.findById(req.params.id).exec()
   .then(order => {
      order.orderDate = req.body.orderDate,
      order.orderTime = req.body.orderTime,
      order.amount = req.body.amount;
      order.save();
      return res.json(order);
   });
}

exports.remove = (req, res) => {
   OrderModel.findById(req.params.id).exec()
   .then(order => {
      order.active = false;
      order.save();
      return res.json(order);
   })
}