const express = require("express");
const ordersRouter = express.Router();

let { list, show, create, update, remove } = require("../../controllers/ordersController");

ordersRouter.get("/orders", list);
ordersRouter.post("/orders", create);

module.exports = ordersRouter;