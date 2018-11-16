const express = require("express");
const router = express.Router();

const {list, show, create, update, remove} = require(
   "../controllers/MessageController");

// storing get, post, put, delete functions in variables
router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);
router.put("/messages/:id", update);
router.delete("/messages/:id", remove);

// export router so other files have access to routes via variables above
module.exports = router;