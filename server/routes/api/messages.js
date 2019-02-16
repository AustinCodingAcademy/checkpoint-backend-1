const express = require("express");
const messagesRouter = express.Router();

let { list, show, create, update, remove } = require("../../controllers/messagesController");

messagesRouter.get("/messages", list);
messagesRouter.post("/messages", create);

module.exports = messagesRouter;