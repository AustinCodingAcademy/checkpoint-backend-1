const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb://birdman:fignewton1@ds237955.mlab.com:37955/checkpoint1', {useNewUrlParser: true});

const orderRoutes = require("./Routes/order");
const messageRoutes = require("./Routes/message")
const taskRoutes = require("./Routes/task")
const dataRoutes = require("./Routes/DataRoutes")

app.use(bodyParser.json());
app.use(orderRoutes);
app.use(messageRoutes);
app.use(taskRoutes);
app.use(dataRoutes)



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 });