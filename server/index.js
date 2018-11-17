const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://scheatham:630Nagle@ds261247.mlab.com:61247/scheatham-checkpoint1");

const fs = require('fs');
const app = express();
const fetch = require('node-fetch');

const MessageRoutes = require("./routes/MessageRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const TaskRoutes = require("./routes/TaskRoutes");

app.use(parser.json())
app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);

fs.readFile('./data.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const dataSent = data.split('\n');
    const dataNums = dataSent[1].split(',');
    
    app.get('/dateTime', (req, res)=>{
        let d = new Date();
        res.send(d)
    })
    app.get('/newComments', (req, res)=>{
        res.send(dataNums[0])
    })
    app.get('/newTasks', (req, res)=>{
        res.send(dataNums[1])
    })
    app.get('/newOrders', (req, res)=>{
        res.send(dataNums[2])
    })
    app.get('/tickets', (req, res)=>{
        res.send(dataNums[3])
    })
});

fetch('https://randomfox.ca/floof')
    .then(response=>response.json())
    .then(json=>{
        app.get('/foxes', (req, res)=>{
            res.json(json.image)
        })
    })


app.listen(3001, () => console.log('Listening on port 3001!'))