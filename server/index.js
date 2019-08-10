const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messageRoutes = require('../routes/messages');
const orderRoutes = require('../routes/orders');
const taskRoutes = require('../routes/tasks');
const foxRoutes=require('../routes/foxes')


mongoose.connect('mongodb://GChivas:smitty5smitty5@cluster0-shard-00-00-e2mbo.mongodb.net:27017,cluster0-shard-00-01-e2mbo.mongodb.net:27017,cluster0-shard-00-02-e2mbo.mongodb.net:27017/checkpoint1db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true})
.then(()=>console.log("Connected to database..."))
.catch(err=>console.log(err))

let app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(messageRoutes, orderRoutes,taskRoutes,foxRoutes);


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log("server is listening on port 3000..."))