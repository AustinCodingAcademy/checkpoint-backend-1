const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/FoxController.js");


router.get("/foxes", list);
// router.get("/foxes/:id", show);
// router.post("/newOrders", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
