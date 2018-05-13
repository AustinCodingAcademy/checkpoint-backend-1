// Connect to data (i.e. Model)
const Message = require('../models/messageModel')

module.exports.list = ((req,res)=>{
  Message.find({}).exec()
  .then(messages=>{
    res.json(messages)
  })
})

module.exports.show = ((req, res)=>{
  Message.findById({"_id":req.params.id}).exec()
  .then(message=>{
    res.json(message)
  })
})

module.exports.create = ((req, res)=>{
  const newMessage = new Message({
    name: req.body.name,
    date: new Date(),
    message: req.body.message
  })
  newMessage.save()
  .then(savedMessage=>{
    res.json(savedMessage)
  })
})

module.exports.update = ((req, res)=>{res.json({theId: req.params.id})})

module.exports.remove = ((req, res)=>{res.json({})})