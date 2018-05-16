const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/NewTasksController.js");


router.get("/newTasks", list);
// router.get("/newTasks/:id", show);
// router.post("/newTasks", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
