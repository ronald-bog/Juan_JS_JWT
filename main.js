const jwt = require('jsonwebtoken');
require('dotenv').config();

// Crear un token JWT
// sign(payload, key, opciones)
// como llamar a la variable de entorno: process.env.CLAVE_SECRETA
const key = process.env.CLAVE_SECRETA;

//const clave = 'abc';

const payload = {
    userID: 101,
    userName: 'Juan',
    role: 'admin'
};

const token = jwt.sign(payload, key, { expiresIn: '1h' });

console.log(`Token generado: ${token}`);

// Verificacion del token
// sintaxis: jwt.verify(token, key)

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEwMSwidXNlck5hbWUiOiJKdWFuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM4NzIwNDc4LCJleHAiOjE3Mzg3MjQwNzh9.9a_UEWXIBhrySdH2-34BQi9iqvMdEaPQOFhMv4-qpO4';

try {
    const tokenVerif = jwt.verify(token1, key);
    //console.log(`Token Verificado: ${ tokenVerif }`);
    console.log('Token Verificado:', tokenVerif);

} catch (error) {
    console.error('TOKEN INVALIDO: ', error.message);
}

