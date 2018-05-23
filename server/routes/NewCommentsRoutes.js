const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/NewCommentsController.js");


router.get("/newComments", list);
// router.get("/newComments/:id", show);
// router.post("/newComments", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
