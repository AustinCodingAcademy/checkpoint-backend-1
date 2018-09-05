let express = require ("express");
const router = express.Router();

let {list,create} = require ("../controllers/TaskControllers");
router.get("/task",list);
router.post("/task",create);


module.exports = router;