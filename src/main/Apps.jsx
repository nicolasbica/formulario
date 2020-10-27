import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Formulario from './main/Formulario'
import Curriculo from './Curriculo'
import Projetos from './Projetos'


function Apps() {
    return <Router>

        <Switch>
            <Route path="/formulario" >
                <Formulario />
            </Route>
            <Route path="/curriculo">
                <Curriculo />
            </Route>
            <Route path="/projetos.">
                <Projetos />
            </Route>
        </Switch>
    </Router>
}



export default Apps