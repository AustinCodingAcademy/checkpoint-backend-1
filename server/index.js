const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Joe_Cluster:cluster@cluster0-2avxp.mongodb.net/checkpoint-backend-1', {useNewUrlParser: true});

let taskRoute = require('../Routes/taskRoutes');
let orderRoute = require('../Routes/ordersRoutes');
let messageRoute = require('../Routes/messagesRoutes');
let dataRoute = require('../Routes/dataRoutes');
let foxRoute = require('../Routes/foxRoutes');

app.use(taskRoute);
app.use(orderRoute);
app.use(messageRoute);
app.use(dataRoute);
app.use(foxRoute);


const thePort = 3001;
app.listen(thePort, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port", thePort);
   });
   