import React, {Component} from 'react'

// estrutura para guardar os valores iniciais
const valoresIniciais = {
    campos : {peso: 0, altura: 0, imc: 0}    
}

export default class Crud extends Component {

    state = {...valoresIniciais}

    atualizaCampo(e){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        campos[e.target.name] = e.target.value // campos[peso] = 85 campos[altura] = 1.73
        // altera o valor dos campos
        this.setState({campos})
    }

    calcula(){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        const aux = Number(this.state.campos.peso) / (Number(this.state.campos.altura)* Number(this.state.campos.altura))
        campos['imc'] = aux
        // altera o valor do imc do campos
        this.setState({campos})
    }
  // método que renderiza - desenha no navegador
  render(){
    return (
        <div> 
            <h1> Vamos criar uma calculadora de IMC </h1>
            <div className="form">
                <div className="form-group">
                    <label> Peso </label>
                    <input type="number" className="form-control" name="peso" placeholder="Informe seu peso usando ."
                        value={this.state.campos.peso} onChange={ e => this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <label> Altura </label>
                    <input type="number" className="form-control" name="altura" placeholder="Informe sua altura usando ."
                        value={this.state.campos.altura} onChange={e=> this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <button onClick={e=> this.calcula()} type="button" className="btn btn-primary"> Calcular </button>
                </div>
                <div className="form-group">
                    <label> IMC: {this.state.campos.imc.toFixed(2)} </label>
                </div>
            </div>
        </div>
    )
    }
}