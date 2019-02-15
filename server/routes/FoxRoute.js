const express = require("express");
const router = express.Router();
const {show} = require("../controllers/FoxController");

router.get("/foxes", show);

module.exports = router;
