const express = require('express');
const router = express.Router();
const data = '../server/data.csv';
const csv = require('csvtojson');

router.get('/newDate',(req,res)=>{
    res.send(new Date);
});

router.get('/newComments',(req,res)=>{
    csv()
    .fromFile(data)
    .then(jsonObj=>{
        res.send(jsonObj[0].new_comments)
    });
})

router.get('/newTasks',(req,res)=>{
    csv()
    .fromFile(data)
    .then(jsonObj=>{
        res.send(jsonObj[0].new_tasks)
    });
})

router.get('/newOrders', (req,res)=>{
    csv()
    .fromFile(data)
    .then(jsonObj=>{
        res.send(jsonObj[0].new_orders)
    });
})

router.get('/tickets', (req,res)=>{
    csv()
    .fromFile(data)
    .then(jsonObj=>{
        res.send(jsonObj[0].tickets)
    });
});

module.exports = router;