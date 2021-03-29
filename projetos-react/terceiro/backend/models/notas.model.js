let mongoose = require('mongoose')

// criar um esquema do banco de dados
let Schema = mongoose.Schema
let notasSchema = new Schema({
    ra: {type: Number, required: true},
    nome: {type: String, required: true},
    curso: {type: String, required: true},
    disciplina: {type: String, required: true},
    p1: {type: Number, required: true},
    p2: {type: Number, required: true},
    media: {type: Number, required: true}
})

module.exports = mongoose.model('Notas', notasSchema)