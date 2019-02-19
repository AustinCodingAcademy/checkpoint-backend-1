const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://user:password1@ds133964.mlab.com:33964/checkpoint1', {useNewUrlParser: true});

const taskRoutes = require("./Routes/task")
const orderRoutes = require("./Routes/order");
const messageRoutes = require("./Routes/message")

const app = express();
app.use(bodyParser.json());
app.use(taskRoutes);
app.use(orderRoutes);
app.use(messageRoutes);


app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});
   