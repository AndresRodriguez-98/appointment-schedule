const mongoose = require('mongoose')

const MedicoSchema = new mongoose.Schema({
    // aqui los datos del esquema
    medicoId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    medicoNombre: { type: String, require: true },
    medicoApellido: { type: String, require: true },
    especialidad: { type: String, require:true, default: 'Otorrinolaringólogo'},
    citasLista: { type: Array, require: false, null: true },
    bono: { type: String, require: false, default: 'Bono A' },
})

module.exports = mongoose.model('Medico', MedicoSchema)