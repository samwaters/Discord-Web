/// globals mode
import 'babel-polyfill'
import { createHashHistory } from 'history'
import * as React from 'react'
import { render } from 'react-dom'
// Router
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
// Redux
import { createRootReducer } from './reducers'
import { applyMiddleware, compose, createStore } from 'redux'
// Saga
import createSagaMiddleware from '@redux-saga/core'

// Components
import { App } from './app'
import { rootSaga } from './sagas'

interface IDevtoolsWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

// Defined in webpack config
declare var mode

const win: IDevtoolsWindow = window
const enhancers = (mode === 'development' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  createRootReducer(history),
  enhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)

sagaMiddleware.run(rootSaga)
