const express = require("express");
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://checkpoint:green3@ds337985.mlab.com:37985/checkpoint-backend', {useNewUrlParser: true});

const bodyParser = require("body-parser");

// const orderRoutes = require("./routes/OrderRoutes");
// const taskRoutes = require("./routes/TaskRoutes");
const messageRoutes = require("./routes/MessageRoutes");
// const foxRoutes = require("./routes/FoxRoutes");
// const dataRoutes = require("./routes/DataRoutes");

app.use(bodyParser.json());
// app.use(orderRoutes);
// app.use(taskRoutes);
app.use(messageRoutes);
// app.use(foxRoutes);
// app.use(dataRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 });