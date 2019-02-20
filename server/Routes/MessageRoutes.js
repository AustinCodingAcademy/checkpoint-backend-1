const express = require('express');
const router = express.Router();
const { list, show, create, update } = require("../Controllers/MessageController");

router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);
router.put("/messages/:id", update);

module.exports = router;