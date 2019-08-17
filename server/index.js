let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://alaynapuck28:horseshoe2@cluster0-3umzc.mongodb.net/checkpoint1",
  { useNewUrlParser: true }
);
//routes
// let dataRoute = require("./routes/dateRoute");

app.use(bodyParser.json());
app.use(express.static("public"));

let dataRoutes = require("./routes/dataRoutes");
var foxRoutes = require("./routes/foxRoutes");

app.use(dataRoutes);
// app.use("/tasks", taskRoutes)
// app.use("/orders", orderRoutes)
// app.use("/messages", messageRoutes)
app.use("/foxes", foxRoutes);

app.listen(3000, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", 3000);
});

// var messageRoutes= require("./routes/messageRoutes")
// var orderRoutes = require("./routes/orderRoutes")
// var taskRoutes = require("./routes/taskRoutes")

//*********** */broken code that won't read the csv :(**********
// const fs = require("fs");

// fs.readFile(csvFilePath, "utf8", (err, data) => {
//   //   if (err) throw err;
//   //   console.log(data);
//   const dataSent = data.split("\n");
//   const dataNums = dataSent[1].split(",");
// });
// const fs = require("fs");
// var content;
// First I want to read the file
// fs.readFile("./data.csv", function read(err, data) {
//   if (err) {
//     throw err;
//   }
//   content = data;

//   // Invoke the next step here however you like
//   console.log(content); // Put all of the code here (not the best solution)
//   processFile(); // Or put the next step in a function and invoke it
// });

// function processFile() {
//   console.log(content);
// }

//   app.get("/dateTime", (req, res) => {
//     let d = new Date();
//     res.send(d);
//   });
//   app.get("/newComments", (req, res) => {
//     res.send(dataNums[0]);
//   });
//   app.get("/newTasks", (req, res) => {
//     res.send(dataNums[1]);
//   });
//   app.get("/newOrders", (req, res) => {
//     res.send(dataNums[2]);
//   });
//   app.get("/tickets", (req, res) => {
//     res.send(dataNums[3]);
//   });
// });
