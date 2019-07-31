const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
let state = require('./state')

mongoose.connect('mongodb://cbetori:betori12@database-cb-shard-00-00-nio9a.gcp.mongodb.net:27017,database-cb-shard-00-01-nio9a.gcp.mongodb.net:27017,database-cb-shard-00-02-nio9a.gcp.mongodb.net:27017/checkpoint-1?ssl=true&replicaSet=database-cb-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true})

const messagesRoute = require('../public/routes/route-messages')
const ordersRoute = require('../public/routes/route-orders')
const tasksRoute = require('../public/routes/route-tasks')
const foxRoute = require('../public/routes/route-fox')

app.use(bodyparser.json(), messagesRoute, ordersRoute, tasksRoute, foxRoute)
app.use(express.static('public'))

app.get("/dateTime", (req, res) => {  
  let currentDate = new Date().toLocaleString()
  res.send(currentDate)
})
app.get("/newComments", (req, res) => {
  res.send(JSON.stringify(state.newComments))
})
app.get("/newTasks", (req, res) => {
  res.send(JSON.stringify(state.newTasks))
})
app.get("/newOrders", (req, res) => {
  res.send(JSON.stringify(state.newOrders))
})
app.get("/tickets", (req, res) => {
  res.send(JSON.stringify(state.tickets))
})
app.get("/taskItem", (req, res) => {
  res.send(JSON.stringify(state.taskItem))
})



app.listen(3001)