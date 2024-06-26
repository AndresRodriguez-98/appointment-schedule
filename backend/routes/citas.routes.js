const express = require('express')
const citaRouter = express.Router()
const citaController = require('../controllers/cita.controller')

citaRouter.post('/', citaController.crearCita)
citaRouter.get('/', citaController.obtenerCitas)
citaRouter.get('/:citaId', citaController.obtenerCitasporId)
citaRouter.delete('/:citaId', citaController.cancelarCita)
citaRouter.put('/:citaId', citaController.modificarFecha)
citaRouter.post('/:citaId', citaController.feedBack)

module.exports = citaRouter