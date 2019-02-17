const csvFilePath='data.csv';
const csv = require('csvtojson');


exports.newTasks = function newTasks(req,res) {
        csv()
        .fromFile(csvFilePath)
            .then((jsonObj)=>{
                res.json(jsonObj[0].new_tasks);
        })
}

exports.newComments = function newComments(req,res) {
        csv()
        .fromFile(csvFilePath)
            .then((jsonObj)=>{
                res.json(jsonObj[0].new_comments);
        })
}

exports.newOrders = function newOrders(req,res) {
        csv()
        .fromFile(csvFilePath)
            .then((jsonObj)=>{
                res.json(jsonObj[0].new_orders);
        })
}

exports.tickets = function tickets(req,res) {
        csv()
        .fromFile(csvFilePath)
            .then((jsonObj)=>{
                res.json(jsonObj[0].tickets);
        })
}

exports.dateTime = function dateTime(req,res) {
        csv()
        .fromFile(csvFilePath)
            .then((jsonObj)=>{
                res.json(new Date());
        })
}


