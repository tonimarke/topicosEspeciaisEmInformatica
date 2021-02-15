import React from 'react'
import ReactDom from 'react-dom'
import Crud from './Crud'
import Triangulo from './Triangulo'
ReactDom.render(
    <React.Fragment>
        <Crud/> <hr/> <Triangulo/> 
    </React.Fragment>, document.getElementById('root'))

