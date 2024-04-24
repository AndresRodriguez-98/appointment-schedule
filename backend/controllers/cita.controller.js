const Cita = require('../models/cita')

const crearCita = async (req, res) => {
    const { medicoId, pacienteId, nombreMedico, nombrePaciente, fechaCita, precio } = req.body

    if (!medicoId || !pacienteId) {
        return res.status(400).json({ error: 'Se requiere un médico y un paciente' })
    }

    const nuevaCita = new Cita({ medicoId: medicoId, pacienteId: pacienteId, nombreMedico: nombreMedico, nombrePaciente: nombrePaciente, fechaCita: fechaCita, precio: precio })
    await nuevaCita.save()

    res.status(201).json(nuevaCita)
}

const obtenerCitas = async (req, res) => {
    const citas = await Cita.find({}).exec()
    res.json(citas)
}

const obtenerCitasporId = async (req, res) => {
    const cita = await Cita.findOne({ citaId: req.params.citaId }).exec()

    if (cita) {
        res.json(cita)
    } else { 
        res.status(404).json({ error: 'Cita no encontrada' })
    }
}

const cancelarCita = async (req, res) => {
    const citaACancelar = await Cita.deleteOne({ citaId: req.params.citaId }).exec()

    if (!citaACancelar) {
        return res.status(404).json({ error: 'Cita no encontrada' })
    } else {
        return res.status(200).json({ error: 'Cita cancelada correctamente' })
    }
}

const ModificarHorario = async (req, res) => {
    const citaAEditar = await Cita.findOne({ citaId: req.params.citaId }).exec()

    try{
        if(!citaAEditar) {
            return res.status(404).json({ mensaje: 'Cita no encontrada'})
        }

        res.json(citaAEditar);
    } catch (error) {
        console.error('Error al modificar el horario de la cita', error);
        res.status(500).json({ mensaje: 'Error interno del servidor'});
    }
}

// feedback de la cita

module.exports = {
    crearCita,
    obtenerCitas,
    obtenerCitasporId,
    cancelarCita,
    ModificarHorario
}