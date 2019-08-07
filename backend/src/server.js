const express = require('express'); // importando express
const routes = require('./router');

const server = express(); // criando o servidor para receber requisições e retornar respostas

server.use(routes);

server.listen(3333); // porta em que o servidor vai escutar

