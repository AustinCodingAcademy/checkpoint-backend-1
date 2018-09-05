let express = require ("express");
const router = express.Router();
let {list,create} = require ("../controllers/NewTasksControllers");
router.get("/newTask",list);
router.post("/newTask",create);



module.exports = router;