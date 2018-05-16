const express = require("express");
const router = express.Router();

router.use(require("./SummaryRoutes"));
// router.use(require("./CommentRoutes"));
// router.use(require("./ProductRoutes"));
// router.use(require("./VehicleRoutes"));

module.exports = router;
