import React from 'react'
import ReactDom from 'react-dom'
import Exemplo1 from './Exemplo1'
import Exemplo2 from './Exemplo2'
import Menu from './Menu'

ReactDom.render(
    <React.Fragment>
        <Menu/>
        <hr/>
        <Exemplo1/>
        <hr/>
        <Exemplo2/>
    </React.Fragment>, document.getElementById("root")
)