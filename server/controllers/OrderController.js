const orderModel = require("../models/OrderModel")


 exports.list = function list(request, response) {
    orderModel.find().exec().then((orders)=>{
        return response.json(orders);
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
        order: request.body.order,
        date: request.body.date
    })
    neworder.save().then(savedorder => {
        console.log(savedorder)
    })
} 

exports.update = function update(request, response) {
    return response.json({theId: request.params.id});
}

exports.remove = function remove(request, response) {
        return response.json({});
}
