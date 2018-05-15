// const fetch = require("node-fetch");
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds117590.mlab.com:17590/checkpoint-one");

// issues:
// 3. How do I read the .csv file and parse the data??
// 4. why is the fox fetch not working? Where do I use routes/fetch? I am getting back the image URL but the app just freezes up


const MessagesRoutes = require("./routes/MessagesRoutes");
app.use(MessagesRoutes);
const OrdersRoutes = require("./routes/OrdersRoutes");
app.use(OrdersRoutes);
const TasksRoutes = require("./routes/TasksRoutes");
app.use(TasksRoutes);
// const FoxesRoutes = require("./routes/FoxesRoutes");
// app.use(FoxesRoutes);

app.get(function (req, res) {
  fs.readFile("/data.csv", "utf8", function (err, data) {
  // dataArr = data.split(/\r?\n/); 
    console.log(data);
    return res.send(data);
  });
});


app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3002");
});

// const dataArr = [];



// console.log(dataArr);


// app.use(function (req) {
//   if (req.method === "GET" && req.path === "/foxes" ) {
//     fetch("https://randomfox.ca/floof/").then(response => response.json()).then(json => {
//       console.log(json.image);
//       return json;
//     });
//   }
// });




// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
