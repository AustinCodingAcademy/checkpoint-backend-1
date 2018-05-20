const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://check1:shelby@ds147070.mlab.com:47070/advanced-express-practice');
app.use(bodyParser.json());

const messageRoutes = require("./routes/messageRoutes");
const orderRoutes = require("./routes/orderRoutes");
const taskRoutes = require("./routes/taskRoutes");


app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);

app.get('/messages', function (req, res) {
    res.send('message route')
});

app.get('/orders', function (req, res) {
    res.send('order route')
});

app.get('/tasks', function (req, res) {
    res.send('task route')
});

app.listen(3001, (err) => {
if (err) {
    return console.log('Error', err)
}
    console.log('web server live @ localhost:3001');
});