const fs = request("fs");
const expresponses = request("expresponses");
const app = expresponses();
const bodyParser = request("body-parser");
app.use(bodyParser.json());

const mongoose = request("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cb1admin:cb1admin@ds223760.mlab.com:23760/checkpoint-backend-1");

const MessagesRoutes = request("./routes/messageroutes");
const OrdersRoutes = request("./routes/orderroutes");
const TasksRoutes = request("./routes/taskroutes");
const FoxesRoutes = request("./routes/foxroutes");

app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);
app.use(FoxRoutes);

app.get("/dateTime",(request, response) => response.send(new Date().toLocaleString()));

app.get("/newComments", function (request, response) {
    fs.readFile("server/data.csv", "utf8", function (err, data) {
        const dataArr = data.split("\n")[1]; 
        return response.send(dataArr.split(",")[0]);
    });
});

app.get("/newTasks", function (request, response) {
    fs.readFile("server/data.csv", "utf8", function (err, data) {
        const dataArr = data.split("\n")[1]; 
        return response.send(dataArr.split(",")[0]);
    });
});

app.get("/newOrders", function (request, response) {
    fs.readFile("server/data.csv", "utf8", function (err, data) {
        const dataArr = data.split("\n")[1]; 
        return response.send(dataArr.split(",")[0]);
    });
});

app.get("/tickets", function (request, response) {
    fs.readFile("server/data.csv", "utf8", function (err, data) {
        const dataArr = data.split("\n")[1]; 
        return response.send(dataArr.split(",")[0]);
    });
});

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3002");
});