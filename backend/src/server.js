const express = require('express'); // importando express

const server = express(); // criando o servidor para receber requisições e retornar respostas

server.get('/', (req, res) => {
    // console.log(req.query); // ?name=william ao final do link, vai aparecer um json

    // return res.send('Hello World');
    // return res.send(`Hello ${req.query.name}`); // detalhe na crase
    return res.json({ message: `Hello ${req.query.name}`});
})

server.listen(3333); // porta em que o servidor vai escutar

