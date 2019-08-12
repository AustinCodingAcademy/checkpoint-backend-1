const express = require("express");
const router = express.Router();
let {getDate, getComments, getTasks, getOrders, getTickets} = require('../controllers/dataController')

router.get('/dateTime', getDate)

router.get('/newComments', getComments)

router.get('/newTasks', getTasks)

router.get('/newOrders', getOrders)

router.get('/tickets', getTickets)

module.exports = router