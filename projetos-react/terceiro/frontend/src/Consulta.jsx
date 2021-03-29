
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Consulta(){

    const valorInicial = [ ] // lista
    
    const [notas, setNotas] = useState(valorInicial)

     // definição das variáveis
     const valoresIniciais = {
        ra: 0, nome: '', curso: '', disciplina: '', p1: 0, p2: 0, media: 0
    }
    // atribuição dos valores iniciais
    // função setCampos é a função para acessar as variáveis 
    const [campos, setCampos] = useState(valoresIniciais)

    useEffect (() => {
        axios['get']('http://localhost:3003/notas')
        .then(resposta => {
            console.log(resposta.data)
            setNotas(resposta.data) // alteração, colocamos apenas os dados
            mostraLinhas()
        }
        )
    }, 
    [notas]
    )
    
    const remove = (id) => {
        axios['delete'](`http://localhost:3003/nota/${id}`)
        .then( resp => {
            alert(`Nota removida com sucesso`)
        })
    }

    const atualiza = (nota) => {
        // colocas os valores para atualização no formulário
        setCampos(nota)
    }
    
    const mostraLinhas = () => {
        return  notas.map(nota => {
            return ( <tr id={nota._id}> 
                     <td> {nota.ra}  </td>
                     <td> {nota.nome} </td>
                     <td> {nota.curso} </td>
                     <td> {nota.disciplina} </td>
                     <td> {nota.p1} </td>
                     <td> {nota.p2} </td>
                     <td> {nota.media} </td>
                     <td> 
                         <button type="button" onClick={ () => remove(nota._id)}> Remove </button>
                         <button type="button" onClick={ () => atualiza(nota)}>  Atualiza </button>
                     </td>
           </tr>
            )
           })
    }
   
    const alteraCampo = (e) => {
        // recupera o nome do campo que sofreu a ação
        let nomeCampo = e.target.name
        // recupera o valor do campo que sofreu a ação
        let valorCampo = e.target.value
        // altera a variável associada
        setCampos({...campos, [nomeCampo]: valorCampo})
    }

    const atualizaDB =() => {

          // chama API
          axios['put'](`http://localhost:3003/nota/${campos._id}`, campos)
          .then( resposta => {
              alert("Atualizado com sucesso")
          })

    }

    const montaAtualiza = () => {
        return (
            <div className="form">
                <div className="form-group">
                    <label> RA </label>
                    <input className="form-control" type="number" name="ra" value={campos.ra} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <label> Nome </label>
                    <input className="form-control" type="text" name="nome" value={campos.nome} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <label> Curso </label>
                    <input className="form-control" type="text" name="curso" value={campos.curso} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <label> Disciplina </label>
                    <input className="form-control" type="text" name="disciplina" value={campos.disciplina} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <label> P1 </label>
                    <input className="form-control" type="number" name="p1" value={campos.p1} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <label> P2 </label>
                    <input className="form-control" type="number" name="p2" value={campos.p2} onChange={alteraCampo}/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={atualizaDB}> Atualiza </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr> 
                        <td> RA </td>
                        <td> Nome </td>
                        <td> Curso </td>
                        <td> Disciplina </td>
                        <td> P1 </td>
                        <td> P2 </td>
                        <td> Média </td>
                        <td> Opções </td>
                    </tr>
                </thead>
                <tbody>
                   { mostraLinhas() }
                </tbody>
            </table>
            {montaAtualiza()}
        </div>
    )
}