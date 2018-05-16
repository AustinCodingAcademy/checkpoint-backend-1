const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nhbs:Nhbs7178@ds123490.mlab.com:23490/checkpoint1-backend");


const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));


const TaskRoutes = require("./routes/TaskRoutes.js");
const OrderRoutes = require("./routes/OrderRoutes.js");
const MessageRoutes = require("./routes/MessageRoutes.js");
const NewTasksRoutes = require("./routes/NewTasksRoutes.js");
const NewOrdersRoutes = require("./routes/NewOrdersRoutes.js");
const NewCommentsRoutes = require("./routes/NewCommentsRoutes.js");
const TicketsRoutes = require("./routes/TicketsRoutes.js");
const DateTimeRoutes = require("./routes/DateTimeRoutes.js");


app.use(TaskRoutes);
app.use(OrderRoutes);
app.use(MessageRoutes);
app.use(NewTasksRoutes);
app.use(NewCommentsRoutes);
app.use(NewOrdersRoutes);
app.use(TicketsRoutes);
app.use(DateTimeRoutes);



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});