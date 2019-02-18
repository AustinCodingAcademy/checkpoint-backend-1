const csvFilePath = '/Users/chriswillis/Development/checkpoint-backend-1/server/data.csv'
const csv=require('csvtojson')

let foundCSV = null;

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  foundCSV=jsonObj
})

exports.listTime = function listTime(request, response){
  return response.send(new Date())
}

exports.listComments = function listComments(request, response){ 
  return response.send(foundCSV[0].new_comments)
}

exports.listTasks = function listTasks(request, response){
  return response.send(foundCSV[0].new_tasks)
}

exports.listOrders = function listOrders(request, response){
  return response.send(foundCSV[0].new_orders)
}

exports.listTickets = function listTickets(request, response){
  return response.send(foundCSV[0].tickets)
  }