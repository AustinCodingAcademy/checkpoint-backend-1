const express = require("express");
const router = express.Router();
const {list} = require( "../controllers/DateTimeController");


router.get("/dateTime", list);

module.exports = router;
