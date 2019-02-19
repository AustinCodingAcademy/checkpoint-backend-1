// * npm install express and body-parser
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


// * connect to your mlab database
mongoose.connect('mongodb://dmuttz:password123@ds141815.mlab.com:41815/cp1', {useNewUrlParser: true});
const app = express()

// * Look at server/state.js
// * create mongoose models that follow the example data
// * create get routes, use the Models to get data from the database
// * /tasks
// * /orders
// * /messages
const orderRoutes = require("./routes/order");
const taskRoutes = require("./routes/task");
const messageRoutes = require("./routes/message");
const foxRoutes = require("./routes/fox");

// * The ceo likes to look at pictures of foxes while reading business reports
// * install node-fetch
// * make a route for /foxes
// * make a http get call to https://randomfox.ca/floof/
// * send back the image value
const foxesRoutes = require("./routes/fox");

app.use(bodyParser.json());
app.use(orderRoutes);
app.use(taskRoutes);
app.use(messageRoutes);
app.use(foxesRoutes);

let projPort = 3001;

// * listen on port 3001
app.listen(projPort, (err) => {
    if (err) {
      return console.log("Error");
    } else {
      console.log("Web server is now listening for messages", projPort);
    }
    
   }); 