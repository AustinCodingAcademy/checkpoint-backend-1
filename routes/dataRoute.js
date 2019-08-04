const express = require("express");
const router = express.Router();
const csvFilePath = "../data.csv";
const csv = require("csvtojson/v1");

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
