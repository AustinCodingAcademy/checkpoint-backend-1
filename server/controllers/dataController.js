const csv=require("csvtojson");
const csvFilePath = './server/data.csv'


exports.getDate = function(req, res){
    res.send(new Date);
}
exports.getComments = function(req, res){
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            comments = jsonObj[0].new_comments
            res.send(comments)
        })
}
exports.getTasks = function(req, res){
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            tasks = jsonObj[0].new_tasks
            res.send(tasks)
        })
}
exports.getOrders = function(req, res){
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            orders = jsonObj[0].new_orders
            res.send(orders)
        })
}
exports.getTickets = function(req, res){
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            tickets = jsonObj[0].tickets
            res.send(tickets)
        })
}