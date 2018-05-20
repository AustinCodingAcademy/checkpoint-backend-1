const express = require('express')
const router = express.Router()
// Router variables that should match the controller
const { list,show,create,update,remove } = require('../controllers/messageController')

// Use whatever method you need (get, post, etc)
router.get('/messages', list)
router.get('/messages/:id', show)
router.post('/messages', create)
router.put('/messages/:id', update)
router.delete('/messages/:id', remove)

module.exports = router