// Connect to data (i.e. Model)
const orderModel= require('../models/orderModel')

module.exports.list=(req, res)=>{
    orderModel.find().exec().then((order)=>{
        return res.json(order)
    })
}

module.exports.show= (req, res)=>{
    orderModel.findById(req.params.id).exec().then((order)=>{
        return res.json(order)
    })
}

module.exports.create=(req,res)=>{
    const o=new orderModel({
        orderDate:req.body.orderTime,
        orderTime:req.body.orderTime,
        amount:req.body.amount
    });
    o.save().then(savedOrder=>{
        return res.json(savedOrder)
    })
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}