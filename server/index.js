const express = require("express");
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://tysweet:sweetty1@ds127490.mlab.com:27490/checkpoint-backend-1");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const FoxRoutes = require("../src/routes/FoxRoutes");
app.use(FoxRoutes);
const MessageRoutes = require("../src/routes/MessageRoutes");
app.use(MessageRoutes);
const OrderRoutes = require("../src/routes/OrderRoutes");
app.use(OrderRoutes);
const TaskRoutes = require("../src/routes/TaskRoutes");
app.use(TaskRoutes);

app.get("/dateTime", (req, res) => res.send(new Date().toLocaleString()));

app.get("/newComments", function (req, res) {
fs.readFile("data.csv", 'utf8', function (err,data) {
  const dataArr = data.split("\n")[1];
  return res.send(dataArr.split(",")[0]);
  });
});

app.get("/newTasks", function (req, res) {
  fs.readFile("data.csv", 'utf8', function (err,data) {
    const dataArr = data.split("\n")[1];
    return res.send(dataArr.split(",")[1]);
  });
});

app.get("/newOrders", function (req, res) {
  fs.readFile("data.csv", 'utf8', function (err,data) {
    const dataArr = data.split("\n")[1];
    return res.send(dataArr.split(",")[2]);
  });
});

app.get("/tickets", function (req, res) {
  fs.readFile("data.csv", 'utf8', function (err,data) {
    const dataArr = data.split("\n")[1];
    return res.send(dataArr.split(",")[3]);
  });
});


// Listening to port 3001
app.listen(3001, (err) => {
if (err) {
return console.log("Error", err);
}
console.log("Web server is now listening to port 3001");
});
