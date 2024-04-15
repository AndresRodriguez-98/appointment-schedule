const Medico = require('../models/medico')

const obtenerMedicos = async (req, res) => {
    const medicos = await Medico.find({}).exec()
    res.json(medicos)
}

const obtenerMedicoPorId = async (req, res) => {

    const medico = await Medico.findOne({ dtId: req.params.medicoId }).exec()

    if (medico) {
        res.json(medico)
    } else {
        res.status(404).json({ error: 'Médico no encontrado' })
    }
}

const agregarMedico = async (req, res) => {
    const { medicoId, medicoNombre, medicoApellido, especialidad, bono, citasLista } = req.body

    if (!medicoNombre || !medicoApellido) {
        return res.status(400).json({ error: 'Se requiere nombre y apellido para agregar un Médico' })
    }

    const nuevoMedico = new Medico({ medicoNombre: medicoNombre, medicoApellido: medicoApellido, especialidad: especialidad, bono: bono, citasLista: citasLista })
    await nuevoMedico.save()

    res.status(201).json(nuevoMedico)
}

const eliminarMedico = async (req, res) => {
    const medicoAEliminar = await Medico.deleteOne({ medicoId: req.params.medicoId }).exec()

    if (!medicoAEliminar) {
        return res.status(404).json({ error: 'Médico no encontrado' })
    } else {
        return res.status(200).json({ error: 'Médico eliminado correctamente' })
    }
}

module.exports = {
    obtenerMedicos,
    obtenerMedicoPorId,
    agregarMedico,
    eliminarMedico,
}
