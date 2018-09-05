const express = require("express");
const tasksRouter = express.Router();

let { list, show, create, update, remove } = require("../../controllers/tasksController");

tasksRouter.get("/tasks", list);
tasksRouter.post("/tasks", create);

module.exports = tasksRouter;