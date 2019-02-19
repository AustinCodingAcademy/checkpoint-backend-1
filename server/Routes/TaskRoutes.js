const express = require('express');
const router = express.Router();
const { list, show, create, update } = require("../Controllers/TaskController");

router.get("/tasks", list);
router.get("/tasks/:id", show);
router.post("/task", create);
router.put("/task/:id", update);

module.exports = router;