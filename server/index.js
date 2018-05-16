const fetch = require("node-fetch");
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds117590.mlab.com:17590/checkpoint-one");

// issues:
// 4. why is the fox fetch not working? Where do I use routes/fetch? 
// I am getting back the image URL but the app just freezes up

// const FoxesRoutes = require("./routes/FoxesRoutes");
// app.use(FoxesRoutes);
const MessagesRoutes = require("./routes/MessagesRoutes");
app.use(MessagesRoutes);
const OrdersRoutes = require("./routes/OrdersRoutes");
app.use(OrdersRoutes);
const TasksRoutes = require("./routes/TasksRoutes");
app.use(TasksRoutes);



// app.get("/foxes", function () {
//   fetch("https://randomfox.ca/floof/").then(res => res.json()).then(json => {
//     console.log(json.image);
//     return json.image;
//   });
// });



app.get("/dateTime",(req,res ) => res.send(new Date().toLocaleString()));

app.get("/newComments", function (req, res) {
  fs.readFile("server/data.csv", "utf8", function (err, data) {
    const dataArr = data.split("\n")[1]; 
    return res.send(dataArr.split(",")[0]);
  });
});

app.get("/newTasks", function (req, res) {
  fs.readFile("server/data.csv", "utf8", function (err, data) {
    const dataArr = data.split("\n")[1]; 
    return res.send(dataArr.split(",")[1]);
  });
});

app.get("/newOrders", function (req, res) {
  fs.readFile("server/data.csv", "utf8", function (err, data) {
    const dataArr = data.split("\n")[1]; 
    return res.send(dataArr.split(",")[2]);
  });
});

app.get("/tickets", function (req, res) {
  fs.readFile("server/data.csv", "utf8", function (err, data) {
    const dataArr = data.split("\n")[1]; 
    return res.send(dataArr.split(",")[3]);
  });
});


const port = 3002;

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port " + port);
});


// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
