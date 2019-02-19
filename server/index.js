let mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
mongoose.Connect ("mongodb://vtuohy:bog624tint329@ds131902.mlab.com:31902/checkpoint1")
let express = require("express");
let bodyParser = require ("bodyParser");

const app = express();
app.use(bodyParser.json());
//let foxRoutes = require("./routes/Fox");//
let messageRoutes = require("/routes/Message");
let orderRoutes = require("./routes/Order");
let tasksRoutes = require("./routes/Task");
// let ticketRoutes = require("./routes/Ticket");//
// let newOrderRoutes = require("./routes/NewOrder");
// let newCommentRoutes = require("./routes/NewComment");
// let newTaskRoutes = require("./routes/NewTask");
// let newDateRoutes = require("./routes/NewDate");

//use routes//
app.use(express.static('public'));
//app.use(foxRoutes);
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
//app.use(ticketRoutes);
//app.use(newDateRoutes)
//app.use(newTaskRoutes)

app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});

