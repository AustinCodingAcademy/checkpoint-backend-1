const express = require("express");
const router = express.Router();
const {image} = require("../Controllers/FoxController");

router.get('/foxes', image);

module.exports = router;