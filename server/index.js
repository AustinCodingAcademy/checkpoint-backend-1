const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const fetch = require('node-fetch');

const MessageRoutes  = require("./routes/MessageRoutes");
const OrdersRoutes  = require("./routes/OrdersRoutes");
const TasksRoutes  = require("./routes/TasksRoutes");


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nikidaks:ahU60IKDv3hD@ds229468.mlab.com:29468/aca-checkpoin1");


const app = express();

//listen on port 3001
app.listen(3001, () => console.log('server started'));


//read date from the csv
fs.readFile("server/data.csv", 'utf8', (err, data)=>{
    if (err) throw err;
    const dataSent = data.split('\n')

    const valueArr = dataSent[1].split(',')
        app.get('/newComments', (req, res)=>{
            res.send(valueArr[0])
        })
        app.get('/newTasks', (req, res)=>{
            res.send(valueArr[1])
        })
        app.get('/newOrders', (req, res)=>{
            res.send(valueArr[2])
        })
        app.get('/tickets', (req, res)=>{
            res.send(valueArr[3])
        })
});

//MVC
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(MessageRoutes);
app.use(OrdersRoutes);
app.use(TasksRoutes);


//foxy fetch
app.get("/foxes", (req, res)=>{
    fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => {
        res.json(json.image)
    })
})

