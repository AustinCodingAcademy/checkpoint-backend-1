const express = require('express');
const port = 3001;
const bodyParser = require("body-parser");
const fs = require('fs');
const fetch = require("node-fetch");
const mongoose = require("mongoose");
// setup mongoDB connection
mongoose.Promise = global.Promise;
// connect to personal mongoDB database on mlab
mongoose.connect("mongodb://kesto:password1@ds237713.mlab.com:37713/checkpoint-backend-1");

// grabbing csv data and storing in a variable
const csv = fs.readFileSync('./data.csv', 'utf8');

const json = {};
// function for converting csv to json object
const csvToJson = (csv) => { 
   // turning csv data in array of keys and values
   const rows = csv.split('\n');
   // turning keys and values into arrays within array
   const splitRows = rows.map(row => {
      return row.split(',');
   })
   // assigining values of first arrays as keys for json obj and equating keys to values
   splitRows[0].forEach((key, idx) => {
      json[key] = splitRows[1][idx];
   })
   return json;
}
// convert csv to json, store in data var
const data = csvToJson(csv);

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
   console.log('newComments', json.new_comments);
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

app.get("/foxes", (req, res) => {
   fetch("https://randomfox.ca/floof/")
     .then(res => res.json())
     .then(json => {
       res.json(json.image);
     });
 });

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
