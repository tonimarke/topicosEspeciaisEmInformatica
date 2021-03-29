// cria o servidor express
let express = require('express')
server = express()

// associa segurança ao servidor
let cors = require('cors')
server.use(cors())

// habilita o middleware de JSON do express
server.use(express.json())

// associa o mongoose ao projeto
let mongoose = require('mongoose')
// vamos conectar no banco
mongoose.connect('mongodb://localhost/notas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// importa o NotasController
let NotasController = require('./controllers/notas.controller')
server.get('/notas', NotasController.consulta)
server.post('/nota', NotasController.insere)
server.delete('/nota/:id', NotasController.remove)
server.put('/nota/:id', NotasController.atualiza)
 
// subir o servidor
server.listen(3003, () => {
    console.log(`Servidor ouvindo na porta 3003`)
})

