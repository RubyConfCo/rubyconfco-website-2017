import React, { PropTypes } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import HomePages from './components/Pages/HomePages'

import { history } from './store/'
/**
 *  Componente encargado de hacer el redireccionamiento, segun la ruta del navegador. Maneja los errores segun lo que se le pase al pagina de error en el parametro `state`.
 */

const ClientRouter = () => (
  <ConnectedRouter history={history} >
    <div>
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Redirect to="/404" />
      </Switch>
    </div>
  </ConnectedRouter>
)

ClientRouter.defaultProps = {
  location: {}
}

ClientRouter.propTypes = {
  location: PropTypes.object
}

export default ClientRouter
