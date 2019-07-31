let OrderModel = require('../models/model-orders')
let ObjectID = require('mongodb').ObjectID

exports.list = ( req, res )=> {
    OrderModel.find((err, orders)=>{
        if(err) return console.log(err)
        return res.json(orders)
    })
}

exports.show = ( req, res )=> {
    let ordersId =  ObjectId(request.params.id)
    OrderModel.findById(ordersId, function(err, orders) {
        if (err) return console.error(err)
        return res.json(orders)
    })

}

exports.create =( req, res)=> {
    let body = req.body;
    let order = new Order( { orderDate: body.orderDate, orderTime: body.orderTime, amount: body.amount} )
    order.save(function (err, order) {
        if (err) return console.error(err);
    });
    return res.json(body);
}