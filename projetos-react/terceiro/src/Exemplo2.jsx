import React, {useState} from 'react'

export default function Exemplo2() {

    // definição das variáveis
    const valoresIniciais = {ra: 0, nome: '', curso: '', disciplina: '', p1: 0, p2: 0, media:  0}
    // atribuição dos valores iniciais
    // função setCampos é a função para acessar as variáveis 
    const [campos, setCampos] = useState(valoresIniciais)

    // dentro da variável 'e' virá o nome do campo que sofreu o evento e o valor do campo
    // arrow function
    const alteraCampo = (e) => {
        // recupera o nome do campo que sofreu a ação
        let nomeCampo = e.target.name
        // recupera o valor do campo que sofreu a ação
        let valorCampo = e.target.value
        // altera a variável associada
        setCampos({...campos, [nomeCampo]: valorCampo})
    }

    // arrow function
    const calculaMedia = () => {
        let resultado = (Number(campos.p1) + Number(campos.p2)) / 2
        setCampos({...campos, ['media']: resultado})
    }

    return (
        <div className="container">
            <form>
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
                    <button type="button" onClick={calculaMedia}> Calcula </button>
                </div>
                <div className="form-group"> 
                    <h3> Média: {campos.media} </h3>
                </div>
            </form>
        </div>
    )
}