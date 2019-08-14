const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/tasks");

// TASKS
router.get('/tasks',list)
router.post('/tasks', create)

router.get('/taskItem',list)
router.get('/taskItem/:id', show)
router.post('/taskItem', create)
  
module.exports = router;