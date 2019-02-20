const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require("../controllers/MessagesController");

router.get("/src/App.messages", list);
router.get("/state/:messages/:id", show);
router.post("/state/:messages", create);
router.put("/state/:messages/:id", update);
router.delete("/state/:messages/:id", remove);

module.exports = router;