const express = require('express')
const fs = require('fs')
const csv = require('fast-csv')
const parser = require('body-parser')
const mongoose = require('mongoose')

//Connect to database
const db = mongoose.connection
mongoose.connect('mongodb://dashboard:dashboard@ds221990.mlab.com:21990/dashboard-server')
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


app.get('/dateTime',(req,res)=>res.send(new Date()))
app.get('/newComments', (req,res)=>{
  fs.readFile('server/data.csv','utf8',((err,data)=>{
      if (err) throw err
      const dataSent = data.split('\n')
      res.send(dataSent[1].split(',')[0])
    })
  )
})
app.get('/newTasks', (req,res)=>{
  fs.readFile('server/data.csv','utf8',((err,data)=>{
      if (err) throw err
      const dataSent = data.split('\n')
      res.send(dataSent[1].split(',')[1])
    })
  )
})
app.get('/newOrders', (req,res)=>{
  fs.readFile('server/data.csv','utf8',((err,data)=>{
      if (err) throw err
      const dataSent = data.split('\n')
      res.send(dataSent[1].split(',')[2])
    })
  )
})
app.get('/tickets', (req,res)=>{
  fs.readFile('server/data.csv','utf8',((err,data)=>{
      if (err) throw err
      const dataSent = data.split('\n')
      res.send(dataSent[1].split(',')[3])
    })
  )
})

app.listen(3001, () => console.log('Listening on port 3001!'))