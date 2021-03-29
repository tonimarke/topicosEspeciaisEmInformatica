import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Menu from './Menu'
import Routes from './Routes'



ReactDom.render(
    <React.Fragment>
        <BrowserRouter>
            <Menu/>
            <Routes/>
        </BrowserRouter>
    </React.Fragment>, 
    document.getElementById("root")
)