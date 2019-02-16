let tasks = require('../models/tasks')

module.exports.list = function list(req, res) {
    tasks.find({}, (err, task) =>{
        if(err){
            return res.send(err)
        }else{
            return res.send(task)
        }
        
    })
}

module.exports.create = function create(req, res) {
    const newTask = new tasks({
        id: req.body.id,
        task: req.body.task,
        date: req.body.date,
    
    })
    newTask.save().then(task => res.json(task))
}