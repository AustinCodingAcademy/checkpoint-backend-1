const express = require("express");
const router = express.Router();
let { create, list } = require("../controllers/messages");

router.post("/", create);

router.get("/", list);

module.exports = router;
