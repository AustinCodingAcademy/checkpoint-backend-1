let express = require ("express");
const router = express.Router();

let {list,create} = require ("../controllers/MessageControllers");
router.get("/messages",list);
router.post("/messages",create);


module.exports = router;