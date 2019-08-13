const express = require('express');
const router = express.Router();
const csv = require('csvtojson');

let data = [];

csv()
.fromFile('./server/data.csv')
.then((jsonObj)=>{
    data = jsonObj[0];
});

router.get('/dateTime', (req, res) => {
    let today = new Date;
    let currentTime = `${today.getHours()} : ${today.getMinutes()}`
    res.send(currentTime);
});

router.get('/newComments', (req, res) => {
    res.send(data.new_comments);
});

router.get('/newTasks', (req, res) => {
    res.send(data.new_tasks);
});

router.get('/newOrders', (req, res) => {
    res.send(data.new_orders);
});

router.get('/tickets', (req, res) => {
    res.send(data.tickets);
});

module.exports = router;
