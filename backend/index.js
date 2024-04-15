const express = require('express')
const app = express()
const medicoRoutes = require('./routes/medico.routes')
const authRoutes = require('./routes/auth.routes')
const mongoose = require('mongoose')

app.set('PORT', 3000)

app.use(express.json())

// Rutas para auth
app.use('/auth', authRoutes)

// Rutas para jugadores
app.use('/medicos', medicoRoutes)

const port = app.get('PORT')
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

// cadena de conexión

main().catch(err => console.log(err))

async function main() {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI)
}