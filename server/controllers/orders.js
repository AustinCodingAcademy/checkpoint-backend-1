let Order = require("../models/ordersModel")

exports.list =  function list(req, res) {
   Order.find((err,o)=>{
       return res.json(o);
   });
}
// exports.show = function show(req, res) {
//    Contact.findById(req.params.id, (err,c)=>{
//        return res.json(c);
//    });
// }
exports.create =  function create(req, res) {
    const newOrder = new Order({
        id: req.body.id,
        orderDate: req.body.orderDate,
        orderTime: req.body.orderTime,
        amount: req.body.amount
    })
    newOrder.save().then(savedOrder=>{
        console.log(savedOrder)
    })    
}