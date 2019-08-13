const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const messageRoutes = require('./routes/messages');
const orderRoutes = require('./routes/orders');
const tasksRoutes = require('./routes/tasks');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`We're connected`);
});

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(messageRoutes);
app.use(orderRoutes);
app.use(tasksRoutes);
// app.use(taskRoutes);

app.get('/', (req, res) => res.send(`It's working`))

app.listen(port, () => console.log(`App listening on port ${port}`));