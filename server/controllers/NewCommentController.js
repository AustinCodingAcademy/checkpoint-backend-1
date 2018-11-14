const CommentModel = require("../models/NewCommentModel");

module.exports.list = (req, res)=>{
    CommentModel.find({}).exec().then((comments)=>{
        return res.json(comments)
    })
}
module.exports.show = (req, res)=>{
    CommentModel.findById(req.params.id).exec().then((comment)=>{
        return res.json(comment)
    })
}
module.exports.create = (req, res)=>{
    const c = new CommentModel({
        name: req.body.name,
        date: req.body.date,
        message: req.body.message
    });
    c.save().then(savedComment=>{
        return res.json(savedComment)
    })
}
module.exports.update = (req, res)=>{
    return res.json({theId: req.params.id});
}
module.exports.remove = (req, res)=>{
    return res.json({})
}