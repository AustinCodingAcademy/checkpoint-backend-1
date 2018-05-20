const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cb1admin:cb1admin@ds223760.mlab.com:23760/checkpoint-backend-1");

const MessagesRoutes = require("./routes/messageroutes");
const OrdersRoutes = require("./routes/orderroutes");
const TasksRoutes = require("./routes/taskroutes");
const FoxesRoutes = require("./routes/foxroutes");

app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);
app.use(FoxRoutes);


