const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/TaskController.js");


router.get("/tasks", list);
router.get("/tasks/:id", show);
router.post("/tasks", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;