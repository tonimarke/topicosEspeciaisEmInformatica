// importa o schema de Notas
const Notas = require('../models/notas.model')
// cria uma variável contendo os métodos de CRUD

let NotasController = {

    // função para inserção assíncrono
    insere: async (req, res) => {
        // cria uma Nota com os dados do usuário
        console.log(`Média ${req.body.media}`)
        let nota = Notas({
            ra: req.body.ra,
            nome: req.body.nome,
            disciplina: req.body.disciplina,
            curso: req.body.curso,
            p1: req.body.p1,
            p2: req.body.p2,
            media: ((Number(req.body.p1) + Number(req.body.p2)) / 2)
        })
        // salva no Mongo
        nota.save()
        // envia a nota salva no formato json
        res.json(nota)
    },
    consulta: async (req, res) => {
        Notas.find() // procura pelas notas
        .then( notas => {
            res.json(notas) // retorna todas as notas
        })
    },
    remove: async (req, res) => {
        Notas.deleteOne({_id: req.params.id}) // remove uma nota
        .then(resultado => {
            console.log(`Removido com sucesso`)
            res.json(resultado)
        })
    },
    atualiza: async (req, res) => {
        Notas.updateOne(
            { _id: req.params.id}, {
                ra: req.body.ra,
                nome: req.body.nome,
                disciplina: req.body.disciplina,
                curso: req.body.curso,
                p1: req.body.p1,
                p2: req.body.p2,
                media: (Number(req.body.p1) + Number(req.body.p2)) / 2
            }
        )
        .then (resultado => {
            console.log(`Atualização com sucesso`)
            res.json(resultado)
        })
    }
}

// vamos exportar
module.exports = NotasController