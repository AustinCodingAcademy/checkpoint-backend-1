const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    comment: String
    });
 var Comment = mongoose.model('Comment', commentSchema);
 
 module.exports = Comment