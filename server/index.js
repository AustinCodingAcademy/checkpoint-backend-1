const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

let tasksRoutes = require("./Routes/tasksRoute")
let ordersRoutes = require("./Routes/ordersRoute")
let messagesRoutes = require("./Routes/messagesRoute")
let foxRoute = require("./routes/foxRoute");
let dataRoute = require("./routes/dataRoute")

app.use(tasksRoutes);
app.use(ordersRoutes);
app.use(messagesRoutes);
app.use(foxRoute);
app.use(dataRoute);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/checkpoint-backend', {useNewUrlParser: true});

app.listen(3000, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3000);
});