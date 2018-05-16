const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/NewOrdersController.js");


router.get("/newOrders", list);
// router.get("/newOrders/:id", show);
// router.post("/newOrders", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
