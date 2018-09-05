let express = require ("express");
const router = express.Router();
let {list,create} = require ("../controllers/NewCommentsControllers");
router.get("/newComment",list);
router.post("/newComment",create);



module.exports = router;