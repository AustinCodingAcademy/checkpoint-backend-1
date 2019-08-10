let Message = require("../models/mesagesModel")

exports.list =  function list(req, res) {
   Message.find((err,m)=>{
       return res.json(m);
   });
}
// exports.show = function show(req, res) {
//    Contact.findById(req.params.id, (err,c)=>{
//        return res.json(c);
//    });
// }
exports.create =  function create(req, res) {
    const newMessage = new Message({
        id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    })
    newMessage.save().then(savedMessage=>{
        console.log(savedMessage)
    })    
}