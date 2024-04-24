const express = require('express')
const medicoRouter = express.Router()
const medicoController = require('../controllers/medico.controller')
const verifyToken = require('../middleware/authMiddleware')

medicoRouter.post('/', medicoController.agregarMedico)
medicoRouter.get('/', medicoController.obtenerMedicos)
medicoRouter.get('/:medicoId', medicoController.obtenerMedicoPorId)
medicoRouter.delete('/:medicoId', medicoController.eliminarMedico)
module.exports = medicoRouter