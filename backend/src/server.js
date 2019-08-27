const express = require('express'); // importando express
const mongoose = require('mongoose'); // trata consultas no banco com a sintaxe JS
const cors = require('cors'); // permite acessar a api de qualquer endereço. Libera para o React

const routes = require('./router');

const app = express(); // criando o servidor para receber requisições e retornar respostas
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    console.log(user, socket.id);
    

    connectedUsers[user] = socket.id;
})

mongoose.connect('mongodb+srv://will:omnistack@cluster0-94mvq.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json()); // express não usa json por default
app.use(routes);

server.listen(3333); // porta em que o servidor vai escutar

