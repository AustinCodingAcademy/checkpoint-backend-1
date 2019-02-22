const express = require("express");

//const mongoose = require('mongoose');
//mongoose.connect('mongodb://checkpoint1-user:checkpoint1@ds145895.mlab.com:45895/aca-checkpoint1', {useNewUrlParser: true});


//Routes
const newCommentRoutes = require("./routes/NewCommentRoutes"); 
const newTaskRoutes = require("./routes/NewTaskRoutes"); 
const newOrderRoutes = require("./routes/NewOrderRoutes"); 
const ticketRoutes = require("./routes/TicketRoutes"); 


const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use(newCommentRoutes); 
app.use(newTaskRoutes);
app.use(newOrderRoutes);
app.use(ticketRoutes);

const thePort = 3001;

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port", thePort);
});
