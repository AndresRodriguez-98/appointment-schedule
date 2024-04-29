const express = require('express')
const pacienteRouter = express.Router()
const pacienteController = require('../controllers/paciente.controller')
const verifyToken = require('../middleware/authMiddleware')

pacienteRouter.get('/', pacienteController.obtenerPacientes)
pacienteRouter.get('/:pacienteId', pacienteController.obtenerPacientePorId)
pacienteRouter.put('/:pacienteId', pacienteController.editarPaciente)
pacienteRouter.delete('/:pacienteId', pacienteController.eliminarPaciente)
pacienteRouter.get('/:pacienteId', pacienteController.obtenerCitas)

module.exports = pacienteRouter