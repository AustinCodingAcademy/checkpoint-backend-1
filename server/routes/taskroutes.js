const express = require("express");
const router = express.Router();
const {list,create} = require( "../controllers/taskcontrollers");

router.get("/tasks", list);
router.post("/tasks", create);

module.exports = router;