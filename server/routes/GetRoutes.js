const express = require("express");
const router = express.Router();
const {listTime,listComments,listTasks,listOrders,listTickets} = require("../controllers/GetRoutesController");


router.get("/dateTime", listTime);
router.get("/newComments", listComments);
router.get("/newTasks", listTasks);
router.get("/newOrders", listOrders);
router.get("/tickets", listTickets);

module.exports = router;