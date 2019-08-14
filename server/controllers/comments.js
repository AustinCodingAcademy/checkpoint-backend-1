let Comments = require("../models/commentModel")

exports.list =  function list(req, res) {
    Comments.find((e,comment)=>{
        return res.json(comment);
    });
 }
 exports.show = function show(req, res) {
    Comments.findById(req.params.id, (err,comment)=>{
        return res.json(comment);
    });
 }
 exports.create =  function create(req, res) {
    let newComments = new Comments ({
         body: req.body
    })
    newComments.save(()=>{
        return res.json(newComments);
    });
 }