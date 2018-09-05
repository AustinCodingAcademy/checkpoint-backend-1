let express = require ("express");
const router = express.Router();
let {list,create} = require ("../controllers/NewOrdersControllers");
router.get("/newOrder",list);
router.post("/newOrder",create);



module.exports = router;