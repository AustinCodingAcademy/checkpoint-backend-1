const express = require('express');
const bodyParser = require("body-parser");
let dataRoutes = require("./routes/dataRoutes")

var messageRoutes= require("./routes/messageRoutes")
var orderRoutes = require("./routes/orderRoutes")
var taskRoutes = require("./routes/taskRoutes")
var foxRoutes = require("./routes/foxRoutes")

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://selenasolis:Ss-419057@selena-practice-s1rzj.mongodb.net/checkpoint1", {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(dataRoutes)
app.use("/tasks", taskRoutes)
app.use("/orders", orderRoutes)
app.use("/messages", messageRoutes)
app.use('/foxes', foxRoutes)



const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});