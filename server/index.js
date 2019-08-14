let express = require("express");
let taskRoute = require("./routes/newTasks");
let orderRoute = require("./routes/newOrders");
let messageRoute = require("./routes/messages");
let commentRoute = require("./routes/newComments");
let data = require("./routes/data");


const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(taskRoute);
app.use(orderRoute);
app.use(messageRoute);
app.use(commentRoute);
app.use(data);


mongoose.connect('mongodb+srv://daniela-idara:iigyCLqGdCQOYwKA@cluster0-2gqfc.mongodb.net/checkpoint?retryWrites=true&w=majority', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Success!");
});

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
