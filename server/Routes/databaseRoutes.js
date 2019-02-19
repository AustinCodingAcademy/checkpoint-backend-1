const express = require("express");
const router = express.Router();
const {list,show,create} =require("../Controllers/DatabaseController");

router.get("/:path", list);
// router.get("/:path/:id", show);
router.post("/:path", create);


module.exports =  router;