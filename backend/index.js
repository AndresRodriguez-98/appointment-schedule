const express = require('express')
const app = express()
const medicoRoutes = require('./routes/medico.routes')
const pacienteRoutes = require('./routes/paciente.routes')
const citaRoutes = require('./routes/citas.routes')
const authRoutes = require('./routes/auth.routes')
const mongoose = require('mongoose')

app.set('PORT', 3000)

app.use(express.json())

// Ruta para autenticación
app.use('/auth', authRoutes)

// Ruta para los usuarios/pacientes
app.use('/user', pacienteRoutes)

// Ruta para los medicos
app.use('/medico', medicoRoutes)

// Ruta para citas
app.use('/cita', citaRoutes)

const port = app.get('PORT')
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

// Cadena de conexión

main().catch(err => console.log(err))

async function main() {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI)
}