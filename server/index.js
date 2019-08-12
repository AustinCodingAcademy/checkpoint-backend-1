const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send())

app.listen(port, () => console.log(`App listening on port ${port}`));