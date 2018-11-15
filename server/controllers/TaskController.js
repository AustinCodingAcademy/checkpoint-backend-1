const TaskModel = require("../models/TaskModel");

module.exports.list = (req, res)=>{
    TaskModel.find({}).exec().then((tasks)=>{
        return res.json(tasks)
    })
}
module.exports.show = (req, res)=>{
    TaskModel.findById(req.params.id).exec().then((task)=>{
        return res.json(task)
    })
}
module.exports.create = (req, res)=>{
    const t = new TaskModel({
        task: req.body.task,
        date: req.body.date
    });
    t.save().then(savedTask=>{
        return res.json(savedTask)
    })
}
module.exports.update = (req, res)=>{
    return res.json({theId: req.params.id});
}
module.exports.remove = (req, res)=>{
    return res.json({})
}