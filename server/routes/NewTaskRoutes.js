const express = require("express");
const router = express.Router();
const {list} = require("../controllers/NewTaskController");


router.get("/newTasks", list);

module.exports = router;

