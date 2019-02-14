const express = require("express");
const router = express.Router();
const {
  dateTime,
  newComments,
  newTasks,
  newOrders,
  tickets,
} = require("../controllers/SummaryController");

router.get("/dateTime", dateTime);
router.get("/newComments", newComments);
router.get("/newTasks", newTasks);
router.get("/newOrders", newOrders);
router.get("/tickets", tickets);

module.exports = router;
