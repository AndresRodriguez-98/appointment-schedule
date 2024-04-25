const {MercadoPagoConfig, Payment} = require('mercadopago')
const Cita = require('../models/cita')
const Medico = require('../models/medico')
const Paciente = require('../models/paciente')

const crearCita = async (req, res) => {
    const { medicoId, pacienteId, nombreMedico, nombrePaciente, fechaCita, precio } = req.body

    if (!medicoId || !pacienteId) {
        return res.status(400).json({ error: 'Se requiere un médico y un paciente' })
    }

    // Agarro al paciente y al médico de la cita en cuestión:
    const pacienteAEditar = await Paciente.findOne({ pacienteId: pacienteId }).exec()
    const medicoAEditar = await Medico.findOne({ medicoId: medicoId }).exec()

    if (!pacienteAEditar || !medicoAEditar) {
        return res.status(400).json({ error: 'No se encontró al médico o al paciente' })
    }

    // Crear cita nueva:
    const nuevaCita = new Cita({ medicoId: medicoId, pacienteId: pacienteId, nombreMedico: nombreMedico, nombrePaciente: nombrePaciente, fechaCita: fechaCita, precio: precio })
    await nuevaCita.save();
    crearPagoParaCita(pacienteAEditar.pacienteNombre, medicoAEditar.medicoNombre, nuevaCita.citaId, pacienteAEditar.email, nuevaCita.precio);

    // Agrego la nueva cita las citas de ambos:
    pacienteAEditar.citasLista.push(nuevaCita.citaId)
    medicoAEditar.citasLista.push(nuevaCita.citaId)

    // Guardo en la db los datos:
    await pacienteAEditar.save()
    await medicoAEditar.save()

    // Devuelvo la nueva cita:
    res.status(201).json(nuevaCita)
}

const crearPagoParaCita = async (nombreMedico, nombrePaciente, citaId, email, precio) => {
    // Inicializar el objeto cliente:
    const client = new MercadoPagoConfig({ accessToken: 'TEST-5611016193801782-042519-03d649aca29f1a1b549098ef5a9deb98-200937107', options: { timeout: 5000, idempotencyKey: 'abc' } });

    // Inicializar la API:
    const payment = new Payment(client);

    // Crear el objeto request
    const body = {
        transaction_amount: precio,
        description: `Cita ${citaId} programada para ${nombrePaciente} con ${nombreMedico}`,
        payment_method_id: "bolbradesco",
        payer: {
            email: email
        },
    };

    // Crear opciones para el request:
    const requestOptions = {
        idempotencyKey: 'abc',
    };

    // Hacer la request del pago de la cita:
    payment.create({ body, requestOptions }).then(data => {console.log(data)}).catch(error => {console.log(error)});
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
    const citaACancelar = await Cita.findOne({ citaId: req.params.citaId }).exec()

    if (!citaACancelar) {
        return res.status(404).json({ error: 'Cita no encontrada' })
    } else {
        citaACancelar.cancelada = true;

        await citaACancelar.save()
        return res.status(200).json({ error: 'Cita cancelada correctamente' })
    }
}

const ModificarHorario = async (req, res) => {
    const citaAEditar = await Cita.findOne({ citaId: req.params.citaId }).exec()

    try {
        if (!citaAEditar) {
            return res.status(404).json({ mensaje: 'Cita no encontrada' })
        }

        res.json(citaAEditar);
    } catch (error) {
        console.error('Error al modificar el horario de la cita', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// TODO: Feedback de la cita

module.exports = {
    crearCita,
    obtenerCitas,
    obtenerCitasporId,
    cancelarCita,
    ModificarHorario
}