let Task = require("../models/taskModel")

exports.list =  function list(request, response) {
   Task.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   Task.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newTask = new Task ({
        id: request.body.id,
        task: request.body.task,
        date: request.body.date,
   })
   newTask.save(()=>{
       return response.json(newTask);
   });
}