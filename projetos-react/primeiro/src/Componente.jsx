// vamos importar o React e o Component
import React, {Component} from 'react'

// vamos criar uma classe chamada Componente do tipo Component e já exportá-la
export default class Componente extends Component {

    // cria a funcão de renderização e retorna um código HTML
    // variáveis possuem estados
    // para obter o valor de uma variável, rpecisamos acessar seu estado
    // para alterar o valor de uma variável, precisamos alterar seu estado

    // para receber os parametros do componente, utilizamos o props
    // não usamos o state, pois não alteramos o valor da variavel

    // toda classe precisa de um constructor
    
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div>
                <h1>
                Nosso primeiro programa em React
                </h1>
                <h2>
                    Nome: {this.props.nome}
                </h2>
                <h2>
                    Idade: {this.props.idade}
                </h2>
                <h2>
                    Cidade: {this.props.cidade}
                </h2>
        </div>
            
        )
    }

}