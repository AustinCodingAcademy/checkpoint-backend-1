const express = require("express");
const router = express.Router();
const {newTasks, newComments, newOrders, tickets, dateTime} = require("../Controllers/dataCSVController");

router.get("/newTasks", newTasks);
router.get("/newComments", newComments);
router.get("/newOrders", newOrders);
router.get("/tickets", tickets);
router.get("/dateTime", dateTime);

module.exports = router;