const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/OrderController.js");


router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;