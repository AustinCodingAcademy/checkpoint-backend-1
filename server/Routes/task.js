const express = require("express");
const router = express.Router();
const { list, show, create} = require("../Controllers/task");


router.get("/tasks", list);
router.get("/task/:id", show);
router.post("/tasks", create);

module.exports = router;