const OrderModel = require("../Models/OrderModel");

//GET request
exports.list = function list (request, response) {
    OrderModel.find().exec().then((orders) => {
        return response.json(orders)
    });
}

//GET request by Id
exports.show = function show (request, response) {
    OrderModel.findById(request.params.id).exec.then((order) => {
        return response.json(order)
    });
}

//POST request
exports.create = function create (request, response) {
    const newOrder = new OrderModel ({
        body: request.body.body
    })
    newOrder.save().then((savedNewOrder) => {
        console.log(savedNewOrder)
    });
}


//PUT request
exports.update = function update (request, response) {
    return response.json({ theId: request.params.id });
}
