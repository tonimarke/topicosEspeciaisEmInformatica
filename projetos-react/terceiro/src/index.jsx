import React from 'react'
import ReactDom from 'react-dom'
import Exemplo1 from './Exemplo1'
import Exemplo2 from './Exemplo2'

ReactDom.render(
    <React.Fragment>
        <Exemplo1/>
        <hr/>
        <Exemplo2/>
    </React.Fragment>, document.getElementById("root")
)