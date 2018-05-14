// const fetch = require("node-fetch");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds117590.mlab.com:17590/checkpoint-one");



const MessagesRoutes = require("./routes/MessagesRoutes");
app.use(MessagesRoutes);
const OrdersRoutes = require("./routes/OrdersRoutes");
app.use(OrdersRoutes);
const TasksRoutes = require("./routes/TasksRoutes");
app.use(TasksRoutes);
// const DataRoutes = require("./routes/DataRoutes")

// const data = "./data.csv";
// console.log(data);



app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3002");
});

// fetch("./data.csv")
// .then(res => res.json())
// .then(json => {
//   console.log(json);
// });

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
