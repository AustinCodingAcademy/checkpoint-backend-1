let express = require('express');
let csv = require('./readCsvFile');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')

let db = require('../keys/keys').keys
let tasksRouter = require('./routes/api/tasks')
let messagesRouter = require('./routes/api/messages')
let ordersRouter = require('./routes/api/orders')


//port 
const port = 3001
let app = express();

//middleware
app.use(bodyParser.json())


app.listen(port, err =>{
    if(err){
        console.log(err)
    }else{
        console.log(`listening ${port}`)
    }
})

mongoose
    .connect(db)
    .then(console.log('db connected'))
    .catch(err => console.log(err));

app.use(messagesRouter)
app.use(tasksRouter)
app.use(ordersRouter)
