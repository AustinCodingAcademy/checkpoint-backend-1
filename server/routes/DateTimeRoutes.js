const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/DateTimeController.js");


router.get("/dateTime", list);
// router.get("/dateTime/:id", show);
// router.post("/dateTime", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;