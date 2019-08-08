const express = require('express'); // importando express
const mongoose = require('mongoose'); // trata consultas no banco com a sintaxe JS
const cors = require('cors'); // permite acessar a api de qualquer endereço. Libera para o React

const routes = require('./router');

const server = express(); // criando o servidor para receber requisições e retornar respostas

mongoose.connect('mongodb+srv://will:omnistack@cluster0-94mvq.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json()); // express não usa json por default
server.use(routes);

server.listen(3333); // porta em que o servidor vai escutar

