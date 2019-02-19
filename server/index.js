
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect('mongodb://Bossman1:Bossman2@ds237955.mlab.com:37955/dashboard', {useNewUrlParser: true});
const app = express();

const databaseRoutes = require("./Routes/databaseRoutes");
const csvRoutes = require("./Routes/dataCSVRoutes");
const foxRoute = require("./Routes/foxRoute");


app.use(bodyParser.json());
app.use(csvRoutes);
app.use(foxRoute);
app.use(databaseRoutes);







app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});
   