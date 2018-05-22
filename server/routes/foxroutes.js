const express = require("express");
const router = express.Router();
const {list} = require( "../controllers/foxcontrollers");

router.get("/foxes", list);

module.exports = router;