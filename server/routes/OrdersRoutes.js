const express = require("express");
const router = express.Router();
const {list,create} = require( "../controllers/OrdersController");


router.get("/orders", list);
router.post("/orders", create);

module.exports = router;
