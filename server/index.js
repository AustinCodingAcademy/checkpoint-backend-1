const express = require("express");
const mongoose = require('mongoose');

mongoose.connect('mongodb://drisser:DJR390@ds161764.mlab.com:61764/your-project', {useNewUrlParser: true});

const bodyParser = require("body-parser");
const app = express();

const orderRoutes = require("./routes/OrderRoutes");
const taskRoutes = require("./routes/TaskRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const foxRoutes = require("./routes/FoxRoutes");
const dataRoutes = require("./routes/DataRoutes");

app.use(bodyParser.json());
app.use(orderRoutes);
app.use(taskRoutes);
app.use(messageRoutes);
app.use(foxRoutes);
app.use(dataRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 });