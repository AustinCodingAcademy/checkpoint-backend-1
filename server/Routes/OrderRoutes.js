const express = require('express');
const router = express.Router();
const { list, show, create, update } = require("../Controllers/OrderController");

router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create);
router.put("/orders/:id", update);

module.exports = router;