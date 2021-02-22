import React, {useState} from 'react'

export default function Exemplo2() {
    //definição das variáveis
    const valoresIniciais = {ra: 0, nome:'' , curso: '', disciplina: '', p1:0, p2:0, media: 0}
    //atribuição dos valores iniciais
    // Função serCampos é a função para acessar as variáveis
    const [campos, setCampos] = useState(valoresIniciais)

    // dentro da variável e virá o nome do campo que sofreu o evento e o valor do campo
    const alteraCampo = (e) => {

    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label> RA </label>
                    <input  class="form-control" type="number" name="ra" value="{campos.ra}" onChange={alteraCampo}/>
                </div>
                <div class="form-group">
                    <label> Nome </label>
                    <input class="form-control" type="text" name="nome" value="{campos.nome}" onChange={alteraCampo}/>
                </div>
                <div class="form-group">
                    <label> Curso </label>
                    <input class="form-control" type="text" name="curso" value="{campos.curso}" onChange={alteraCampo}/>
                </div>
                <div>
                    <label> Disciplina </label>
                    <input class="form-control" type="text" name="disciplina" value="{campos.disciplina}" onChange={alteraCampo}/>
                </div>
                <div class="form-group">
                    <label> P1 </label>
                    <input class="form-control" type="number" name="p1" value="{campos.p1}" onChange={alteraCampo}/>
                </div>
                <div class="form-group">
                    <label> P2 </label>
                    <input class="form-control" type="number" name="p2" value="{campos.p2}" onChange={alteraCampo}/>
                </div>
            </form>
        </div>
    )
}
