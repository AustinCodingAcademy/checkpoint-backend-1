const Message = require('../Models/messageModel');

//show all
exports.list = function list(req, res){
    Message.find((e,m)=>{
        return res.json(m);
    });
}
//by id
exports.show = function show(req, res){
    Message.findById(req.params.id, (err, m)=>{
        return res.json(m);
    });
}
//make an order
exports.create = function create(req, res){
    let newMessage = new Message({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    })
    newMessage.save(()=>{
        return res.json(newMessage);
    });
}