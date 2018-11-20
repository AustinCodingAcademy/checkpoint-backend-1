const express = require('express');
const parser = require('body-parser');
const mon = require('mongoose');
const fs= require('fs');
const fetch=require('node-fetch');
const app = express();
mon.Promise = global.Promise;
mon.connect('mongodb://Miriam:plum22@ds157843.mlab.com:57843/checkpoint01');



fs.readFile('server/data.csv', 'utf8', ((err, data)=>{
    if (err) throw err
    const dataSent=data.split('\n')
    
    const value=dataSent[1].split(',')
    app.get('/newComments', (req, res)=>{
        res.send(value[0])
    })
    app.get('/newTasks', (req, res)=>{
        res.send(value[1])
    })
    app.get('/newOrders', (req, res)=>{
        res.send(value[2])
    })
    app.get('/tickets', (req, res)=>{
        res.send(value[3])
    })
}))

app.get('/foxes', (req, res)=>{
    fetch('https://randomfox.ca/floof')
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        res.json(json.image)
    })
})

// fetch('https://randomfox.ca/floof/')
// .then(response=> response.json())
// .then(json=> {
//     app.get('/foxes', (req, res)=>{
//         res.json(json.image)
//     })
// })
app.get("/DateTime", (req, res)=>{
    res.send(new Date())
})


let messageRoutes=require("./routes/messageRoutes");
let orderRoutes=require("./routes/orderRoutes");
let taskRoutes=require("./routes/taskRoutes");

app.use(parser.json())
//Input routes here
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);

app.listen(3001, () => console.log('Listening on port 3001!'))
