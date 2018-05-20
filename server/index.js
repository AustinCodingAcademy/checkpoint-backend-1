const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fetch = require('node-fetch');
const fs = require('fs')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://check1:shelby@ds163689.mlab.com:63689/checkpoint-backend-1');
app.use(bodyParser.json());

const messageRoutes = require("./routes/messageRoutes");
const orderRoutes = require("./routes/orderRoutes");
const taskRoutes = require("./routes/taskRoutes");


app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);

// app.get('/messages', function (req, res) {
//     res.send('message route')
// });

// app.get('/orders', function (req, res) {
//     res.send('order route')
// });

// app.get('/tasks', function (req, res) {
//     res.send('task route')
// });

app.get('/dateTime', (req, res) => res.send(Date()));

fs.readFile('server/data.csv','utf8',((err,data)=>{
    if (err) throw err
    const dataSent = data.split('\n')
      app.get('/newComments', (req,res)=>{
      res.send(dataSent[1].split(',')[0])
    })
      app.get('/newTasks', (req,res)=>{
      res.send(dataSent[1].split(',')[1])
    })
      app.get('/newOrders', (req,res)=>{
      res.send(dataSent[1].split(',')[2])
    })
      app.get('/tickets', (req,res)=>{
      res.send(dataSent[1].split(',')[3])
    })
  })
)

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