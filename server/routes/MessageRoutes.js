const express = require("express");
const router = express.Router();

const {list, show, create} = require(
   "../controllers/MessageController");

// storing get, post, put, delete functions in variables
router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);

// export router so other files have access to routes via variables above
module.exports = router;