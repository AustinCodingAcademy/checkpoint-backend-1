let tasks= require ("../models/Tasks");

module.exports.list =  function list(request, response) {
    tasks.find({}).exec()
    .then(task => {
        response.json(task);
        
    });
   }
   
   
   module.exports.create =  function create(request, response) {
    const newTask = new tasks(request.body);
    newTask.save()
    .then(task =>{
        response.json(task);
    });
   }
   