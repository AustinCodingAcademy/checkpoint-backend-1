const express = require("express");
const router = express.Router();
const path = "/foxes";
const {
  show,
} = require("../controllers/FoxController");

router.get(path, show);

module.exports = router;
