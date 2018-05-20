const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fetch = require("node-fetch");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://checkpoint1user:Lgarrett1970@ds229450.mlab.com:29450/checkpoint1");



const app = express();
// app.use(express.static('public'));
app.use(bodyParser.json());

const newComments = require("./routes/messageRouter");
const newOrders = require("./routes/orderRouter");
const newTasks = require("./routes/taskRouter");


app.use(newComments);
app.use(newOrders);
app.use(newTasks);

app.get("/dateTime", (request, ressponse)=>response.send(Date()));

fs.readFile("server/data.csv", "utf8",(err,data)=>{
  if (err) throw err
  const hardData=data.split("\n")
  app.get("/newComments", (request, response)=>{
    response.send(hardData[1].split(",")[0])
  })
  app.get("/newTasks", (request, response)=>{
    response.send(hardData[1].split(",") [1])
  })
  app.get("/newOrders", (request,response)=>{
    response.send(hardData[1].split(",") [2])
  })
  app.get ("/tickets", (request,response)=>{
    response.send(hardData[1].split(",")[3])
  })
})




app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now working");
});
