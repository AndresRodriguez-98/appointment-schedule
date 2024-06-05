const express = require('express')
const passport = require('./auth/auth');
const app = express()
const medicoRoutes = require('./routes/medico.routes')
const pacienteRoutes = require('./routes/paciente.routes')
const citaRoutes = require('./routes/citas.routes')
const authRoutes = require('./routes/auth.routes')
const mongoose = require('mongoose')

app.set('PORT', 3000)

app.use(express.json())
app.use(passport.initialize());

app.use('/auth', authRoutes)

app.use('/user', pacienteRoutes)

app.use('/medico', medicoRoutes)

app.use('/cita', citaRoutes)

const port = app.get('PORT')
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

main().catch(err => console.log(err))

async function main() {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI)
}