const express = require("express");
const router = express.Router();
const {list} = require("../controllers/NewOrderController");


router.get("/newOrders", list);

module.exports = router;

