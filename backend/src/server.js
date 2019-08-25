const express = require('express'); // importando express
const mongoose = require('mongoose'); // trata consultas no banco com a sintaxe JS
const cors = require('cors'); // permite acessar a api de qualquer endereço. Libera para o React

const routes = require('./router');

const app = express(); // criando o servidor para receber requisições e retornar respostas
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova conexão', socket.id);

    socket.on('hello', message => {
        console.log(message)
    });

    setTimeout(() => {
        socket.emit('world', {
            message: 'Omnstack'
        });
    }, 5000);
})

mongoose.connect('mongodb+srv://will:omnistack@cluster0-94mvq.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json()); // express não usa json por default
app.use(routes);

server.listen(3333); // porta em que o servidor vai escutar

