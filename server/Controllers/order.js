const orderModel = require("../Models/order")


exports.list = function list(request, response) {
    orderModel.find().exec().then((order)=>{
        return response.json(order);
    })
}

exports.show = function show(request, response) {
    orderModel.findById(request.params.id).exec().then((order)=>{
        return response.json(order);
    })
}

exports.create = function create(request, response) {
    const neworder = new orderModel({
        id: request.body.id,
        orderDate: request.body.orderDate,
        orderTime: request.body.orderTime,
        amount: request.body.amount
    })
    neworder.save().then(savedOrder => {
        console.log(savedOrder)
    })
}