const OrderModel = require("../models/OrderModel");

module.exports.list = (req, res)=>{
    OrderModel.find({}).exec().then((orders)=>{
        return res.json(orders)
    })
}
module.exports.show = (req, res)=>{
    OrderModel.findById(req.params.id).exec().then((order)=>{
        return res.json(order)
    })
}
module.exports.create = (req, res)=>{
    const o = new MessageModel({
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    });
    o.save().then(savedOrder=>{
        return res.json(savedOrder)
    })
}
module.exports.update = (req, res)=>{
    return res.json({theId: req.params.id});
}
module.exports.remove = (req, res)=>{
    return res.json({})
}