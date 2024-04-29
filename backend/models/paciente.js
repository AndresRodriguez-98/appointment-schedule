const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const PacienteSchema = new mongoose.Schema({
    // aqui los datos del esquema
    pacienteId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    pacienteNombre: { type: String, require: true },
    pacienteApellido: { type: String, require: true },
    edad: { type: Number, require:true },
    citasLista: { type: Array, require: false, default: [] },
    obraSocial: { type: String, require: false, default: 'Ioma' },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

// Hook previo a crear un usuario, para hashear la contraseña y formar un usuario mas seguro:

PacienteSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

// Funcion que nos permite comparar la contraseña que esta en la base de datos con la que viene del request:
PacienteSchema.methods.isValidPassword = async function(password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

module.exports = mongoose.model('User', PacienteSchema)