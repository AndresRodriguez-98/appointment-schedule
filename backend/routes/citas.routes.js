const express = require('express')
const citaRouter = express.Router()
const citaController = require('../controllers/cita.controller')
const verifyToken = require('../middleware/authMiddleware')

citaRouter.post('/', citaController.crearCita)
citaRouter.get('/', citaController.obtenerCitas)
citaRouter.get('/:citaId', citaController.obtenerCitasporId)
citaRouter.delete('/:citaId', citaController.cancelarCita)
citaRouter.put('/:citaId', citaController.ModificarHorario)

module.exports = citaRouter