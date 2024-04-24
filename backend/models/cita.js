const mongoose = require('mongoose')

const CitaSchema = new mongoose.Schema({
    // aqui los datos del esquema
    citaId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    medicoId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    pacienteId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    nombreMedico: { type: String, require: true },
    nombrePaciente: { type: String, require: true},
    fechaCreacion: { type: mongoose.Schema.Types.Date, auto: true, unique:true },
    fechaCita: { type: String, require:true },
    precio: { type: Number, require: true, default: 0},
    cancelada: { type: Boolean, auto: true, default: false},
    pagada: { type: Boolean, auto: true, default: false}
})

module.exports = mongoose.model('Cita', CitaSchema)