const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://scheatham:630Nagle@ds261247.mlab.com:61247/scheatham-checkpoint1");

const fs = require('fs');
const app = express();

const NewCommentRoutes = require("./routes/NewCommentRoutes");
const NewOrderRoutes = require("./routes/NewOrderRoutes");
const NewTaskRoutes = require("./routes/NewTaskRoutes");
const TicketRoutes = require("./routes/TicketRoutes");

app.use(parser.json())
app.use(NewCommentRoutes);
//Input routes here
fs.readFile('./data.csv', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    const dataSent = data.split('\n');
    // console.log(dataSent[1].split(','))
    const dataNums = dataSent[1].split(',');
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





app.listen(3001, () => console.log('Listening on port 3001!'))