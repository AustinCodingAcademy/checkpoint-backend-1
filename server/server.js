const express = require('express');
const port = 3001;
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
// setup mongoDB connection
mongoose.Promise = global.Promise;
// connect to personal mongoDB database on mlab
mongoose.connect("mongodb://kesto:password1@ds237713.mlab.com:37713/checkpoint-backend-1");

// csv to json conversion
const csvFilePath='./data.csv';
const csv = require('csvtojson');
const data = csv().fromFile(csvFilePath);

const messageRouter = require("./routes/MessageRoutes");
const orderRouter = require("./routes/OrderRoutes");
const taskRouter = require("./routes/TaskRoutes");

const app = express();
// set static path
app.use(express.static('public'));
// body-parser middleware
app.use(bodyParser.json());

app.get('/dateTime', (req, res) => {
   res.send(new Date());
})
app.get('/newComments', (req, res) => {
   res.send(data.new_comments);
})
app.get('/newTasks', (req, res) => {
   res.send(data.new_tasks);
})
app.get('/newOrders', (req, res) => {
   res.send(data.new_orders);
})
app.get('/tickets', (req, res) => {
   res.send(data.tickets);
})
app.get('/foxes', (req, res) => {
   fetch('https://randomfox.ca/floof/')
   .then(data => data.json())
   .then(json => {
      res.send(json.image);
   })
})

// bring in routers with routes and controllers
app.use(messageRouter);
app.use(orderRouter);
app.use(taskRouter);

// app is listening to port 3001
app.listen(port, (err) => {
      if (err) {
      console.log(err);
   } else {
      console.log(`listening on port ${port}`);
   }
}) 
