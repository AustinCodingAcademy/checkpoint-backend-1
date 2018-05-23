const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/TicketsController.js");


router.get("/tickets", list);
// router.get("/tickets/:id", show);
// router.post("/tickets", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
