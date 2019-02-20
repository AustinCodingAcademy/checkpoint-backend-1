const express = require('express');
const router = express.Router();
const { list, show, create, update } = require("../Controllers/TaskController");

router.get("/tasks", list);
router.get("/tasks/:id", show);
router.post("/tasks", create);
router.put("/tasks/:id", update);

module.exports = router;