// impporta a classe padrão do React
import React from 'react'
//importa a classe ReactDom do React
import ReactDOM from 'react-dom'

// DOM - Document Object Model - elementos HTML são nós de arvore
// React renderiza o conteúdo html usando o padrão  DOM


// importa o componente Componente
import Componente from'./Componente'

ReactDOM.render(<Componente nome="Pedro" idade="18" cidade="franca"/>, document.getElementById('root'))