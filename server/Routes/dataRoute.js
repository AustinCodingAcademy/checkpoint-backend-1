const express = require("express");
const router = express.Router();
const filePath='./server/data.csv';
const csv = require("csvtojson");

router.get("/newDate", (request, response)=>{
    response.send(new Date);
});

router.get("/newComments", (request, response)=>{
    csv()
    .fromFile(filePath)
    .then(jsonObj=>{
    response.json(jsonObj[0].new_comments)
    });
});

router.get("/newTasks", (request, response)=>{
    csv()
    .fromFile(filePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].new_tasks)
    });
});

router.get("/newOrders", (request, response)=>{
    csv()
    .fromFile(filePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].new_orders)
    });
});

router.get("/tickets", (request, response)=>{
    csv()
    .fromFile(filePath)
    .then(jsonObj=>{
    response.send(jsonObj[0].tickets)
    });
});

module.exports = router;