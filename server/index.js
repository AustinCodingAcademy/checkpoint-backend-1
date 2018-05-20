require('dotenv').config()

const express = require('express')
const fs = require('fs')
const parser = require('body-parser')
const mongoose = require('mongoose')
const fetch = require('node-fetch')

//Connect to database 
const db = mongoose.connection
mongoose.connect(process.env.MDB?process.env.MDB:console.log(
  '-----------WARNING NO ENV PATH DETECTED...ADD .ENV FILE---------'))
mongoose.Promise = global.Promise
db.on('error',console.error.bind(console, 'connection-error:'))
db.once('open',()=>console.log('Connected to DB'))

//set up express to connect client and server
const app = express()

app.use(parser.json())
//connect routers
app.use(require('./routers/messageRouter'))
app.use(require('./routers/orderRouter'))
app.use(require('./routers/taskRouter'))

app.get('/dateTime',(req,res)=>res.send(Date()))

fs.readFile('server/data.csv','utf8',((err,data)=>{
    if (err) throw err
    const dataSent = data.split('\n')
      app.get('/newComments', (req,res)=>{
      res.send(dataSent[1].split(',')[0])
    })
      app.get('/newTasks', (req,res)=>{
      res.send(dataSent[1].split(',')[1])
    })
      app.get('/newOrders', (req,res)=>{
      res.send(dataSent[1].split(',')[2])
    })
      app.get('/tickets', (req,res)=>{
      res.send(dataSent[1].split(',')[3])
    })
  })
)

fetch('https://randomfox.ca/floof/')
.then(response => response.json())
.then(json => {
  app.get('/foxes', (req,res)=>{
    res.json(json.image)
  })
})

app.listen(3003, () => console.log('Listening on port 3003!'))