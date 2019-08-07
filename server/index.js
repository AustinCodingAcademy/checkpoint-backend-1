const express = require('express');
const bodyParser = require("body-parser");
let dataRoutes = require("./routes/dataRoutes")
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(dataRoutes)

const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});