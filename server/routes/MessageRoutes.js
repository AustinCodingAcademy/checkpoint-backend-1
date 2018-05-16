const express = require("express");
const router = express.Router();
const path = "/messages";
const {
  list,
  show,
  create,
} = require("../controllers/MessageController");

router.get(path, list);
router.get(path + "/:id", show);
router.post(path, create);

module.exports = router;
