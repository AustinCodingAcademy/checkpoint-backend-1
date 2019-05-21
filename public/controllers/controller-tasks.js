let TasksModel = require('../models/model-tasks')
let ObjectID = require('mongodb').ObjectID

exports.list = ( req, res )=> {
    TasksModel.find((err, tasks)=>{
        if(err) return console.log(err)
        return res.json(tasks)
    })
}

exports.show = ( req, res )=> {
    let tasksID =  ObjectId(request.params.id)
    TasksModel.findById(tasksID, function(err, tasks) {
        if (err) return console.error(err)
        return res.json(tasks)
    })

}

exports.create =( req, res)=> {
    let body = req.body;
    let task = new Task( { task: body.task, date: body.date } )
    task.save(function (err, task) {
        if (err) return console.error(err);
    });
    return res.json(body);
}