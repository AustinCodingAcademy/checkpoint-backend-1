const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/MessageController.js");


router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
