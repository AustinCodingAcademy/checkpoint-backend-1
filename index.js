let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://checkpointuser:checkpointuser123@ds233212.mlab.com:33212/checkpoint-backend-1");

let MessageRoutes  = require("./routes/MessageRoutes");
let OrderRoutes  = require("./routes/OrderRoutes");
let TaskRoutes  = require("./routes/TaskRoutes");

const app = express();
const fetch = require("node-fetch");

fetch ("https://randomfox.ca/floof/")
  .then (response => response.json())
  .then (json => {
    return response.json();
  })

app.use(bodyParser.json());//come back to this and check - installation of bodyparser seems to have installed but showed failure message. parser needed for posting

app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Sorry, an error occurred.", err);
  }
  console.log("Listening on port 3001");
});