// Connect to data (i.e. Model)
const messageModel = require('../models/messageModel')

module.exports.list=(req, res)=>{
    messageModel.find().exec().then((message)=>{
        return res.json(message)
    })
}

module.exports.show= (req, res)=>{
    messageModel.findById(req.params.id).exec().then((message)=>{
        return res.json(message)
    })
}

module.exports.create=(req,res)=>{
    const m=new messageModel({
        name:req.body.name,
        date:req.body.date,
        message:req.body.message
    });
    m.save().then(savedMessage=>{
        return res.json(savedMessage)
    })
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}