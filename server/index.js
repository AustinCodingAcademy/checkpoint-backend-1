const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const messagesRoutes = require('./Routes/MessagesRoutes');
const ordersRoutes = require('./Routes/OrdersRoutes');
const tasksRoutes = require('./Routes/TasksRoutes');

app.use(bodyParser.json());
app.use(messagesRoutes);
app.use(ordersRoutes);
app.use(tasksRoutes);


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