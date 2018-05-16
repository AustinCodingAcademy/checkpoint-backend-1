const express = require("express");
const router = express.Router();
const path = "/tasks";
const {
  list,
  show,
  create,
} = require("../controllers/TaskController");

router.get(path, list);
router.get(path + "/:id", show);
router.post(path, create);

module.exports = router;
