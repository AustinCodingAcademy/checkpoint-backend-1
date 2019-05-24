const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = mongoose.connection;
var fs = require('fs');
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect(`mongodb+srv://aaron:testing123@cluster0-hlfen.mongodb.net/checkpoint-one?retryWrites=true`, {useNewUrlParser: true});

const taskRoutes = require('./routes/task-routes');
const orderRoutes = require('./routes/order-routes');
const messageRoutes = require('./routes/message-routes');
const foxRoutes = require('./routes/foxes-route');

app.use(taskRoutes, orderRoutes, messageRoutes, foxRoutes);

let newComments;
let newTasks;
let newOrders;
let tickets;

fs.readFile('./server/data.csv', 'utf8', function(err, contents) {
    contents = contents.replace(/\n/, ',').split(',');
    newComments = contents[4];
    newTasks = contents[5];
    newOrders = contents[6];
    tickets = contents[7];
});

app.get('/dateTime', (req, res) => {
    let now = Date(Date.now());
    res.send(now);
})

app.get('/newComments', (req, res) => {
    res.send(newComments);
})

app.get('/newTasks', (req, res) => {
    res.send(newTasks);
})

app.get('/newOrders', (req, res) => {
    res.send(newOrders);
})

app.get('/tickets', (req, res) => {
    res.send(tickets);
})

app.listen(port, (err) => {
    if(err) return console.log('error: ', err);
    console.log(`Web server now listening on port ${port}.`);
})
