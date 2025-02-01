const jwt = require('jsonwebtoken');

// Crear un token JWT
// sign(payload, key, opciones)

const clave = 'abc';

const payload = {
    userID: 101,
    userName: 'Juan',
    role: 'admin'
};

const token = jwt.sign(payload, clave, { expiresIn: '1h' });

console.log(`Token generado: ${token}`);

