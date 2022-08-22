const express = require('express');
const serverApp = express();
const PORT = 5500;
//---------------------------- Habilitar Express para leer JSON
serverApp.use(express.json());

//---------------------------- Iniciar servidor
serverApp.listen(5500, (error) => {
    console.log('Servidor Node.js funcionando 😎');
    console.table({
        "⛳️ PASO #1 ->": "Ingresa las siguientes URL en el navegador para ver las webs apps",
        "🖥  Mupi URL": `http://localhost:${PORT}/mupi`,
        "📱 Mobile URL": `http://localhost:${PORT}/mobile`,
        "⛳️ PASO #2 ->": "Utiliza los siguientes endpoints para enviar y recibir datos",
        "POST un usuario": `http://localhost:${PORT}/send-user-data`,
        "GET un usuario": `http://localhost:${PORT}/show-user-data`,
    });
});

//---------------------------- Crear las URL de las App
serverApp.use('/mupi', express.static('public-mupi'));
serverApp.use('/mobile', express.static('public-mobile'));

//---------------------------- Database local 
let users = []; // user structure =  {name: ‘’, email: ‘’}

//---------------------------- Endpoints del API
serverApp.get('/show-user-data', (request, response) => {
    response.send(users);
});

serverApp.post('/send-user-data', (request, response) => {
    users.push(request.body);
    console.log('User list: ', users);
    response.end();
});