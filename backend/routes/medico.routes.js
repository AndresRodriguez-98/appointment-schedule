const express = require('express')
const medicoRouter = express.Router()
const medicoController = require('../controllers/medico.controller')
const verifyToken = require('../middleware/authMiddleware')

medicoRouter.get('/', verifyToken, medicoController.obtenerMedicos)
medicoRouter.get('/:medicoId', verifyToken, medicoController.obtenerMedicoPorId)
medicoRouter.post('/', verifyToken, medicoController.agregarMedico)
medicoRouter.delete('/:medicoId', verifyToken, medicoController.eliminarMedico)
module.exports = medicoRouter