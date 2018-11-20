// Connect to data (i.e. Model)
const taskModel= require('../models/taskModel')

module.exports.list=(req, res)=>{
    taskModel.find().exec().then((task)=>{
        return res.json(task)
    })
}

module.exports.show= (req, res)=>{
    taskModel.findById(req.params.id).exec().then((task)=>{
        return res.json(task)
    })
}

module.exports.create=(req,res)=>{
    const t=new taskModel({
        task:req.body.task,
        date:req.body.date
    });
    t.save().then(taskOrder=>{
        return res.json(taskOrder)
    })
}

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}