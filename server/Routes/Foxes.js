let express = require ("express");
const router = express.Router();

let {list,create} = require ("../controllers/FoxControllers");
router.get("/Foxes",list);
router.post("/Foxes",create);


module.exports = router;