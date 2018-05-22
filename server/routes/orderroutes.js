const express = require("express");
const router = express.Router();
const {list,create} = require( "../controllers/ordercontrollers");

router.get("/orders", list);
router.post("/orders", create);

module.exports = router;