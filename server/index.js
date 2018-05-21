const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fetch = require('node-fetch');
const fs = require('fs')

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://check1:shelby@ds163689.mlab.com:63689/checkpoint-backend-1');


const messageRoutes = require("./routes/messageRoutes");
const orderRoutes = require("./routes/orderRoutes");
const taskRoutes = require("./routes/taskRoutes");


app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
app.use(express.static('public'));


app.get('/dateTime', (req, res) => res.send(Date()));


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

fetch('https://randomfox.ca/floof/')
  .then(response => response.json())
  .then(json => {
    app.get('/foxes', (req,res)=>{
      res.json(json.image)
  })
})

app.listen(3001, (err) => {
if (err) {
    return console.log('Error', err)
}
    console.log('web server live @ localhost:3001');
});

