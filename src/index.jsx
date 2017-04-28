import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import ClientRouter from './Router'

import store from './store/'

import './index.html'
import './styles/main.sass'

const approot = document.getElementById('root')

const init = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    approot
  )
}

init(ClientRouter)

if (module.hot) {
  module.hot.accept('./Router', () => {
    init(ClientRouter)
  })
}
