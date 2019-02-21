const express = require("express");
const router = express.Router();
const {list} = require("../controllers/CommentController");


router.get("/newComments", list);

module.exports = router;

