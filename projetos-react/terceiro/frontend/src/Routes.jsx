import Cadastra from './Cadastra'
import Home from './Home'

import Consulta from './Consulta'
import {Switch, Route, Redirect} from 'react-router'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path="/cadastra" component={Cadastra}/>
            <Route path="/cadastra/:nota" component={Cadastra}/>
            <Route path="/consulta" component={Consulta}/> 
            <Redirect from="*" to="/"/>
        </Switch>
    )
}