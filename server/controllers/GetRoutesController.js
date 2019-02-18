const csvFilePath = '../data.csv'
const csv=require('csvtojson')


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

exports.listTime = function listTime(request, response){
  return response.send("44")
}

exports.listComments = function listComments(request, response){
  return response.send("44")
}

exports.listTasks = function listTasks(request, response){
  return response.send("44")
}

exports.listOrders = function listOrders(request, response){
  return response.send("44")
}

exports.listTickets = function listTickets(request, response){
  return response.send("44")  
}