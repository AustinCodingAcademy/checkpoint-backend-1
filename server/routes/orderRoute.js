const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/messageController");

// ORDERS
router.get('/order',list)
router.get('/order:id', show)
router.post('/order', create)
  
module.exports = router;