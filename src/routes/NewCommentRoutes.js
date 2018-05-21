const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/NewCommentController");


router.get("/newComments", list);
router.get("/newComments/:id", show);
router.post("/newComments", create);

module.exports = router;