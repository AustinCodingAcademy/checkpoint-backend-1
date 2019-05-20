const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://dbAdmin:pass1234@cluster0-shard-00-00-2km2k.mongodb.net:27017,cluster0-shard-00-01-2km2k.mongodb.net:27017,cluster0-shard-00-02-2km2k.mongodb.net:27017/ACA-checkpoint?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', function(err) {
  console.log(err)
  // If no error, successfully connected
});

const foxesRoute = require("./routes/foxesRoute")
const messageRoutes = require("./routes/MessageRoutes")
const orderRoutes = require("./routes/OrderRoutes")
const taskRoutes = require("./routes/TaskRoutes")

const app = express();
app.use(bodyParser.json());
app.use(foxesRoute)
app.use(messageRoutes)
app.use(orderRoutes)
app.use(taskRoutes)
app.use(express.static("public"));

app.get("/dateTime", (req, res) => {  
  let curDate = new Date().toLocaleString()
  res.send(curDate)
})
app.get("/newComments", (req, res) => {
  res.send("33")
})
app.get("/newTasks", (req, res) => {
  res.send("12")
})
app.get("/newOrders", (req, res) => {
  res.send("15")
})
app.get("/tickets", (req, res) => {
  res.send("4")
})

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
