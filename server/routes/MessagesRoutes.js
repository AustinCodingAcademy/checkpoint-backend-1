const express = require("express");
const router = express.Router();
const {list,create} = require( "../controllers/MessagesController");


router.get("/messages", list);
router.post("/messages", create);


module.exports = router;
