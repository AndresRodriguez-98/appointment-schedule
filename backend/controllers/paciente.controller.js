/* eslint-disable no-useless-catch */
const Paciente = require('../models/paciente')
const Citas = require('../models/cita')

const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find({}).exec()
    res.json(pacientes)
}

const obtenerPacientePorId = async (req, res) => {
    const paciente = await Paciente.findOne({ pacienteId: req.params.pacienteId }).exec()

    if (paciente) {
        res.json(paciente)
    } else {
        res.status(404).json({ error: 'Paciente no encontrado' })
    }
}

const eliminarPaciente = async (req, res) => {
    const pacienteAEliminar = await Paciente.deleteOne({ pacienteId: req.params.pacienteId }).exec()

    if (!pacienteAEliminar) {
        return res.status(404).json({ error: 'Paciente no encontrado' })
    } else {
        return res.status(200).json({ error: 'Paciente eliminado correctamente' })
    }
}

const editarPaciente = async (req, res) => {
    const pacienteAEditar = await Paciente.findOne({ pacienteId: req.params.pacienteId }).exec()
    const updateParams = req.body;

    try{
        if(!pacienteAEditar) {
            return res.status(404).json({ mensaje: 'Paciente no encontrado'})
        }

        for (const key in updateParams){
            if(updateParams.hasOwnProperty(key)){
                pacienteAEditar[key] = updateParams[key]
            }
        }

        await pacienteAEditar.save();

        res.json(pacienteAEditar);
    } catch (error) {
        console.error('Error al actualizar el perfil del paciente', error);
        res.status(500).json({ mensaje: 'Error interno del servidor'});
    }
}

const obtenerCitas = async (req, res) => {
    const listadoDeCitas = await Citas.find({}).exec()
    res.json(listadoDeCitas)
}

module.exports = {
    obtenerPacientes,
    obtenerPacientePorId,
    eliminarPaciente,
    editarPaciente,
    obtenerCitas
}