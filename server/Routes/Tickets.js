let express = require ("express");
const router = express.Router();

let {list,create} = require ("../controllers/TicketControllers");
router.get("/tickets",list);
router.post("/tickets",create);


module.exports = router;