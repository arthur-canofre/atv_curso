const express  = require('express')
const router = express.Router()
const controlador = require('./controller')

router.get("/", controlador.listUsers)

module.exports = router