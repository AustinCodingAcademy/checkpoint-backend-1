const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/taskController')

// Use whatever method you need (get, post, etc)
router.get('/tasks', list)
router.get('/tasks/:id', show)
router.post('/tasks', create)
router.put('/tasks/:id', update)
router.delete('/tasks/:id', remove)

module.exports = router