const express = require('express')
const authRouter = express.Router()
const passport = require('passport');
const jwt = require('jsonwebtoken')
require('dotenv').config()

// User registration
authRouter.post('/register', (req, res, next) => {
    passport.authenticate('signup', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!user) {
            return res.status(400).json({ message: info.message });
        }
        res.status(201).json({ message: 'Registro exitoso', user });
    })(req, res, next);
});

// User login
// Ruta de login
authRouter.post('/login', (req, res, next) => {
    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'Falló el login' });
        }
        if (!user) {
            return res.status(401).json({ error: info.message || 'Usuario no encontrado' });
        }

        req.login(user, { session: false }, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ error: 'Falló el login' });
            }
            // Crear el token incluyendo el ID del usuario, para eso ASEGURARNOS DE CAPTURAR EL ID!!! (con lo que puse en body):
            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, process.env.JWT_SECRET_KEY, {
                expiresIn: '1h',
            });
            return res.status(200).json({ token });
        });
    })(req, res, next);
});


module.exports = authRouter