const express = require("express");
const router = express.Router();

router.use(require("./SummaryRoutes"));
router.use(require("./TaskRoutes"));
router.use(require("./OrderRoutes"));
// router.use(require("./VehicleRoutes"));

module.exports = router;
