const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://Donald:turd45@ds241133.mlab.com:41133/checkpoint-1", {useNewUrlParser: true});
const bodyParser = require("body-parser");
const app = express();

const messageRoutes = require("./routes/MessageRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const taskRoutes = require("./routes/TaskRoutes");
const foxRoute = require("./routes/FoxRoute");
const dataRoutes = require("./routes/DataRoutes");

app.use(bodyParser.json());
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
app.use(foxRoute);
app.use(dataRoutes);

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
  });