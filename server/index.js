const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req, res) => res.send(`It's working`))

app.listen(port, () => console.log(`App listening on port ${port}`));