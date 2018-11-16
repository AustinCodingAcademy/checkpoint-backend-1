const express = require('express');
const port = 3001;
const mongoose = require("mongoose");
// setup mongoDB connection
mongoose.Promise = global.Promise;
// connect to personal mongoDB database on mlab
mongoose.connect("mongodb://kesto:password1@ds237713.mlab.com:37713/checkpoint-backend-1");
// file system
const fs = require("fs");
const bodyParser = require("body-parser");

// csv to json conversion
const csvFilePath='./data.csv';
const csv = require('csvtojson');
csv().fromFile(csvFilePath).then((jsonObj) => {
   console.log(jsonObj.tickets);
})

const messageRouter = require("./routes/MessageRoutes");
const orderRouter = require("./routes/OrderRoutes");
const taskRouter = require("./routes/TaskRoutes");

const app = express();
// set static path
app.use(express.static('public'));
// body-parser middleware
app.use(bodyParser.json());
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
// route
app.use('/', (req, res) => {
   res.send('working');
})

// controller
// const fnc = function(req, res) {
//    Profile.find()
//    .then(res => res.json())
//    .then(data => res.json(data))
// }

// app.get('/', fnc);

