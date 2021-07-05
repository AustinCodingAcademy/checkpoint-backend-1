const Order = require('../Models/orderModel');

//show all
exports.list = function list(req, res){
    Order.find((e, o)=>{
        return res.json(o);
    });
}
//by id
exports.show = function show(req, res){
    Order.findById(req.params.id, (err, o)=>{
        return res.json(o);
    });
}
//make order
exports.create = function create(req, res){
    let newOrder = new Order({
        id: req.body.id,
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    })
    newOrder.save(()=>{
        return res.json(newOrder);
    });
}