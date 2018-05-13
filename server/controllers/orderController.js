// Connect to data (i.e. Model)
const Order = require('../models/orderModel')

module.exports.list = ((req,res)=>{
  Order.find({}).exec()
  .then(orders=>{
    res.json(orders)
  })
})

module.exports.show = ((req, res)=>{
  Order.findById({"_id":req.params.id}).exec()
  .then(order=>{
    res.json(order)
  })
})

module.exports.create = ((req, res)=>{
  const newOrder = new Order({
    orderDate: new Date(),
    orderTime: new Date(),
    amount: req.body.amount
  })
  newOrder.save()
  .then(savedOrder=>{
    res.json(savedOrder)
  })
})

module.exports.update = ((req, res)=>res.json({theId: req.params.id}))

module.exports.remove = ((req, res)=>res.json({}))