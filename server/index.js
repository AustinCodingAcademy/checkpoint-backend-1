const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let tasks = require ('./state').tasks;
let orders = require ('./state').orders;
let messages = require('./state').messages;

const messageRoutes = require('./Routes/MessageRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const taskRoutes = require('./Routes/TaskRoutes');

app.use(bodyParser.json());
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);


mongoose.connect('mongodb://jflores353:$T1nkyi25!@ds343895.mlab.com:43895/checkpoint1', {useNewUrlParser: true});

// app.use(express.static('public'));

app.get('./data', function (req, res) {
    res.json()
})

app.listen(3001, (err) => {
    if (err) {
        return console.log('Error', err);
    }
    console.log('Web server is now listening for messages on port 3001');
});