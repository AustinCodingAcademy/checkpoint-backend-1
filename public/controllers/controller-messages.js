let MessageModel = require('../models/model-messages')
let ObjectID = require('mongodb').ObjectID

exports.list = ( req, res )=> {
    MessageModel.find((err, messages)=>{
        if(err) return console.log(err)
        return res.json(messages)
    })
}

exports.show = ( req, res )=> {
    let messagesId =  ObjectId(request.params.id)
    MessageModel.findById(messagesId, function(err, messages) {
        if (err) return console.error(err)
        return res.json(messages)
    })

}

exports.create =( req, res)=> {
    let body = req.body;
    let message = new Message( { name: body.name, date: body.date, message: body.message} )
    message.save(function (err, message) {
        if (err) return console.error(err);
    });
    return res.json(body);
}