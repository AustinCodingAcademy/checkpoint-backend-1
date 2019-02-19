const express = require("express");
const router = express.Router();
const { show } = require("../Controllers/foxes");

router.get("/foxes", show);

module.exports = router;