const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messageRoutes = require('../routes/messages');
const orderRoutes = require('../routes/orders');
const taskRoutes = require('../routes/tasks');

mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/checkpoint1db?retryWrites=true',{useNewUrlParser: true})
.then(()=>console.log("Connected to database..."))
.catch(err=>console.log(err))

let app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(messageRoutes, orderRoutes,taskRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log("server is listening on port 3000..."))