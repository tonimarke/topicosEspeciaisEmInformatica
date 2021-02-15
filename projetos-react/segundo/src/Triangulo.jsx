import React, {Component} from 'react'

// estrutura para guardar os valores iniciais
const valoresIniciais = {
    campos : {a: 0, b: 0, c: 0, delta: 0}    
}

export default class Triangulo extends Component {

    state = {...valoresIniciais}

    atualizaCampo(e){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        campos[e.target.name] = e.target.value // campos[peso] = 85 campos[altura] = 1.73
        // altera o valor dos campos
        this.setState({campos})
    }

    calcula(){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        var a = Number(this.state.campos.a);
        var b = Number(this.state.campos.b);
        var c = Number(this.state.campos.c);

        
        const aux = (b * b) - (4  * a * c)
        campos['delta'] = aux
        // altera o valor do delta do campos
        this.setState({campos})
    }
  // método que renderiza - desenha no navegador
  render(){
    return (
        <div> 
            <h1> Vamos criar uma calculadora de delta </h1>
            <div className="form">
                <div className="form-group">
                    <label> Valor de A </label>
                    <input type="number" className="form-control" name="a" placeholder="Informe o valor de A"
                        value={this.state.campos.a} onChange={ e => this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <label> Valor de B </label>
                    <input type="number" className="form-control" name="b" placeholder="Informe o valor de B"
                        value={this.state.campos.b} onChange={ e => this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <label> Valor de C </label>
                    <input type="number" className="form-control" name="c" placeholder="Informe o valor de C"
                        value={this.state.campos.c} onChange={ e => this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <button onClick={e=> this.calcula()} type="button" className="btn btn-primary"> Calcular </button>
                </div>
                <div className="form-group">
                    <label> delta: {this.state.campos.delta.toFixed(2)} </label>
                </div>
            </div>
        </div>
    )
    }
}