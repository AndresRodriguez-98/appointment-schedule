const mongoose = require('mongoose')

const CitaSchema = new mongoose.Schema({
    citaId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    medicoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    pacienteId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    nombreMedico: { type: String, require: true },
    nombrePaciente: { type: String, require: true },
    fechaCreacion: { type: mongoose.Schema.Types.Date, auto: true },
    fechaCita: { type: String, require: true },
    precio: { type: Number, require: true, default: 0 },
    cancelada: { type: Boolean, auto: true, default: false },
    pagada: { type: Boolean, auto: true, default: false },
    feedback: { type: String, require: false, default: '' }
})

module.exports = mongoose.model('Cita', CitaSchema)