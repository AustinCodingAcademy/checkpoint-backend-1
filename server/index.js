const express = require("express");
const bodyParser = require("body-parser");

const getRoutes = require("./routes/GetRoutes")
const taskRoutes = require("./routes/TaskRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const foxRoutes = require("./routes/FoxRoutes");


const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password1@ds337985.mlab.com:37985/checkpoint-1', { useNewUrlParser: true });




const app = express();

app.use(bodyParser.json());
app.use(getRoutes)
app.use(taskRoutes);
app.use(orderRoutes);
app.use(messageRoutes);
app.use(foxRoutes);



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});