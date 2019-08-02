const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// app.use(express.static("public"));
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kelly-nguyen-1:45683968kn@aca-practice-ss4lm.mongodb.net/checkpoint-backend-1?retryWrites=true&w=majority', {useNewUrlParser: true});

let foxRoute = require("./routes/foxRoute");
let messageRoute  = require("./routes/messageRoute");
let orderRoute = require("./routes/orderRoute");
let taskRoute = require("./routes/taskRoute");
let dataRoute = require("./routes/dataRoute")

app.use(bodyParser.json());
app.use(foxRoute);
app.use(messageRoute);
app.use(orderRoute);
app.use(taskRoute);
app.use(dataRoute);


app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3001);
});
