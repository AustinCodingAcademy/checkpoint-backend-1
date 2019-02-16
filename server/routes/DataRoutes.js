const express = require("express");
const router = express.Router();
const csvFilePath = '../data.csv';
const csv = require('csvtojson');

csv()
.fromFile(csvFilePath)
.then(jsonObj=> console.log(jsonObj))

router.get("/newComments", (req, res)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    res.send(jsonObj[0].new_comments)
    })
});

router.get("/newTasks", (req, res)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    res.send(jsonObj[0].new_tasks)
    })
});

router.get("/newOrders", (req, res)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    res.send(jsonObj[0].new_orders)
    })
});

router.get("/tickets", (req, res)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    res.send(jsonObj[0].tickets)
    })
});

router.get("/newDate", (req, res)=>{
    res.send(new Date)
});


module.exports =  router;