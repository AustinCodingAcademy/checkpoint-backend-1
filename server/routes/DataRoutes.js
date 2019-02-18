const express = require("express");
const router = express.Router();
const filePath='../data.csv';
const csv = require("csvtojson");

csv().fromFile(filePath).then(jsonObj=> console.log(jsonObj));

router.get("/newDate", (request, response)=>{
    response.send(new Date);
});

router.get("/newComments", (request, response)=>{
    csv()
    .fromFile(filePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].new_comments)
    });
});

router.get("/newTasks", (request, response)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].new_tasks)
    });
});

router.get("/newOrders", (request, response)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].new_orders)
    });
});

router.get("/tickets", (request, response)=>{
    csv()
    .fromFile(csvFilePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].tickets)
    });
});


// const fs = require("fs");
// let content;

// app.get("/csvData",(request,res)=>{
//     fs.readFile("../data.csv", function(data){
//         res.json(data);
//     })
// })


