
const thePort = 3001;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://user1:12345@database-server-1-5wzy9.mongodb.net/test?retryWrites=true&w=majority", function(err){
  console.log(err)
});

const messageRoutes = require("../routes/MessagesRoutes");
const orderRoutes = require("../routes/OrdersRoutes");
const taskRoutes = require('../routes/TasksRoutes');

const app = express();
app.use(bodyParser.json());
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
app.use(express.static("public"));

app.get("/dateTime", (req,res) => {
  let currentDate = new Date().toLocaleString()
  res.send(currentDate)
});

app.get("/newComments", (req,res) => {
  res.send("33")
})

app.get("/newOrders", (req,res) => {
  res.send("15")
})

app.get("/tickets", (req,res) => {
  res.send("4")
})

app.listen(thePort, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port",thePort);
   });