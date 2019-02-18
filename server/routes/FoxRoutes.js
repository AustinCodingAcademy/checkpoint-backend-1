const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require("../controllers/FoxController");


router.get("/foxes", list);

module.exports = router;